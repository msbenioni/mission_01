'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { Upload as UploadIcon, Camera } from 'lucide-react';
import Confetti from 'react-confetti';
import InsuranceOptions from './InsuranceOptions';
import '../globals.css';

type Prediction = {
  class: string;
  confidence: number;
}

type FileWithPreview = File & {
  preview?: string;
};

export default function Upload() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<FileWithPreview | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
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
      // Convert File to base64
      const base64Image = await fileToBase64(file);
      
      const response = await fetch('http://localhost:8000/predict', {  // Changed from 5000 to 8000
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          image: base64Image 
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to analyze image');
      }
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Invalid response format');
      }

      return [{
        class: data.predictions.class,        
        confidence: data.predictions.confidence
      }];
    } catch (error) {
      console.error('Analysis error:', error);
      throw error;
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          // Remove the data:image/jpeg;base64, prefix
          const base64 = reader.result.split(',')[1];
          resolve(base64);
        } else {
          reject(new Error('Failed to convert file to base64'));
        }
      };
      reader.onerror = error => reject(error);
    });
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      // Create preview URL and set file
      const previewUrl = URL.createObjectURL(droppedFile);
      setFile(Object.assign(droppedFile, { preview: previewUrl }));
      
      // Start analysis
      setIsAnalyzing(true);
      setProgress(0);
      try {
        const results = await analyzeImage(droppedFile);
        setPredictions(results);
        setIsAnalyzing(false);
        setProgress(100);
        handleSuccessfulUpload();
      } catch (error) {
        console.error('Error processing file:', error);
        setError('Failed to analyze image');
        setIsAnalyzing(false);
      }
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const selectedFile = event.target.files?.[0];
      if (selectedFile) {
        // Create preview URL and set file
        const previewUrl = URL.createObjectURL(selectedFile);
        setFile(Object.assign(selectedFile, { preview: previewUrl }));
        
        // Start analysis
        setIsAnalyzing(true);
        setProgress(0);
        const results = await analyzeImage(selectedFile);
        setPredictions(results);
        setIsAnalyzing(false);
        setProgress(100);
        handleSuccessfulUpload();
      }
    } catch (error) {
      console.error('Error processing file:', error);
      setError('Failed to analyze image');
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
                        className={`bg-red-500 h-2.5 rounded-full transition-all duration-500 progress-bar w-[${progress}%]`}
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
                        <p className="font-medium text-lg">{pred.class}</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                          <div 
                            className={`bg-red-500 h-2.5 rounded-full transition-all duration-500 w-[${pred.confidence * 100}%]`}
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

      {predictions && predictions[0]?.class && (
        <InsuranceOptions kartType={predictions[0].class} />
      )}
    </div>
  );
}