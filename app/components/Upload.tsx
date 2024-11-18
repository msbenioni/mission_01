'use client';

import { useState, useEffect } from 'react';
import { Upload as UploadIcon, Camera, Image } from 'lucide-react';
import Confetti from 'react-confetti';
import InsuranceOptions from './InsuranceOptions';

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

// Add this new type for preview URL
type FileWithPreview = File & {
  preview?: string;
};

export default function Upload() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<FileWithPreview | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0); // For progress tracking
  const [predictions, setPredictions] = useState<Prediction[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  // Clean up preview URL when component unmounts
  useEffect(() => {
    return () => {
      if (file?.preview) {
        URL.revokeObjectURL(file.preview);
      }
    };
  }, [file]);

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
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;
    
    try {
      // Create preview URL
      const previewUrl = URL.createObjectURL(selectedFile);
      const fileWithPreview = Object.assign(selectedFile, { preview: previewUrl });
      
      setFile(fileWithPreview);
      setIsAnalyzing(true);
      setError(null);
      setProgress(0);

      // Simulate progress (you can adjust this based on your needs)
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return prev;
          }
          return prev + 10;
        });
      }, 500);

      const predictions = await analyzeImage(selectedFile);
      
      clearInterval(progressInterval);
      setProgress(100);
      setPredictions(predictions);
      handleSuccessfulUpload();
      
    } catch (error) {
      setError(error.message || 'Failed to process image');
    } finally {
      setIsAnalyzing(false);
    }
  };

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
              {/* Image Preview */}
              <div className="relative">
                <img
                  src={file.preview}
                  alt="Preview"
                  className="w-full h-64 object-contain rounded-lg"
                />
                {isAnalyzing && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    {/* Simple Spinning Circle */}
                    <div className="w-12 h-12 mb-4">
                      <div className="w-full h-full border-4 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 overflow-hidden">
                      <div 
                        className="bg-red-500 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="text-white mt-2">Analyzing your kart... {progress}%</p>
                  </div>
                )}
              </div>

              {error ? (
                <p className="text-red-500">{error}</p>
              ) : predictions ? (
                <div className="space-y-2">
                  <p className="text-green-600">Analysis Complete!</p>
                  <div className="text-left bg-gray-50 p-4 rounded overflow-auto">
                    {predictions.map((pred, index) => (
                      <div key={index} className="mb-2">
                        <p className="font-medium text-lg">{pred.label}</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                          <div 
                            className="bg-red-500 h-2.5 rounded-full transition-all duration-500"
                            style={{ width: `${pred.confidence * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <button
                onClick={() => {
                  if (file.preview) {
                    URL.revokeObjectURL(file.preview);
                  }
                  setFile(null);
                  setPredictions(null);
                  setError(null);
                  setProgress(0);
                }}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                Start Again
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

      {predictions && (
        <InsuranceOptions kartType={predictions[0].label} />
      )}
    </div>
  );
}