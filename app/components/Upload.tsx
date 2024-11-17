'use client';

import { useState } from 'react';
import { Upload as UploadIcon, Camera, Image } from 'lucide-react';
import Confetti from 'react-confetti';

type PredictionResponse = {
  predictions: Array<{
    displayNames: string[];
    confidences: number[];
  }>;
  deployedModelId: string;
  model: string;
  modelDisplayName: string;
  modelVersionId: string;
}

type Prediction = {
  label: string;
  confidence: number;
}

export default function Upload() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [predictions, setPredictions] = useState<Prediction[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const analyzeImage = async (file: File) => {
    try {
      console.log('Starting image analysis for:', file.name)
      const formData = new FormData()
      formData.append('image', file)
      
      const response = await fetch('/api/predict', {
        method: 'POST',
        body: formData
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.details || 'Failed to process image')
      }
      
      const data = await response.json()
      console.log('Received response:', data)
      
      if (!data.success || !data.predictions) {
        throw new Error('No predictions in response')
      }

      const predictionData = data.predictions as PredictionResponse;
      const formattedPredictions = predictionData.predictions[0].displayNames.map((label, index) => ({
        label,
        confidence: predictionData.predictions[0].confidences[index]
      }));

      return formattedPredictions;
    } catch (error) {
      console.error('Analysis error:', error)
      throw error
    }
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      await analyzeImage(droppedFile);
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    
    try {
      setFile(file)
      setIsAnalyzing(true)
      setError(null)
      
      console.log('Processing file:', file.name)
      const predictions = await analyzeImage(file)
      console.log('Got predictions:', predictions)
      
      setPredictions(predictions)
      handleSuccessfulUpload()
      
    } catch (error) {
      console.error('Upload error:', error)
      setError(error.message || 'Failed to process image')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleSuccessfulUpload = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
        />
      )}

      <div className="text-center mb-12">
        <Camera className="w-16 h-16 mx-auto text-red-500 mb-4" />
        <h2 className="text-3xl font-bold mb-4 text-red-600">Upload Your Kart Photo</h2>
        <p className="text-gray-600">Let our AI identify your kart and get you the perfect insurance quote!</p>
      </div>

      <div
        className={`border-4 border-dashed rounded-xl p-12 text-center transition-all ${
          isDragging ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-500"
        }`}
        onDragEnter={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDragging(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDragging(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDrop={handleDrop}
      >
        <div className="max-w-sm mx-auto">
          {file ? (
            <div className="space-y-4">
              <Image className="w-16 h-16 mx-auto text-red-500" />
              <p className="text-lg font-medium">{file.name}</p>
              {isAnalyzing ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-red-500" />
                  <p className="text-gray-600">Analyzing your kart...</p>
                </div>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : predictions ? (
                <div className="space-y-2">
                  <p className="text-green-600">Analysis Complete!</p>
                  <div className="text-left bg-gray-50 p-4 rounded overflow-auto">
                    {predictions.map((pred, index) => (
                      <div key={index} className="mb-2">
                        <p className="font-medium">{pred.label}</p>
                        <p className="text-sm text-gray-600">
                          Confidence: {(pred.confidence * 100).toFixed(2)}%
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              <button
                onClick={() => {
                  setFile(null);
                  setPredictions(null);
                  setError(null);
                }}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                Remove
              </button>
            </div>
          ) : (
            <>
              <UploadIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <p className="text-lg mb-2">
                Drag and drop your kart photo here, or
              </p>
              <label className="inline-block">
                <span className="bg-red-500 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-red-600 transition">
                  Browse Files
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            </>
          )}
        </div>
      </div>
    </div>
  );
}