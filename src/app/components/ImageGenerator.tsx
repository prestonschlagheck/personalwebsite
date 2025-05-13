'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface GeneratedImage {
  url: string;
  id: string;
}

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateImages = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setImages([]);
    setSelectedImage(null);
    setError(null);

    try {
      const response = await fetch('/api/replicate/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate images');
      }

      const data = await response.json();
      
      // Simulate loading state for 3 seconds
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setImages(data.images.map((url: string, index: number) => ({
        url,
        id: `image-${index}`
      })));
    } catch (error) {
      console.error('Error generating images:', error);
      setError(error instanceof Error ? error.message : 'Failed to generate images');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-8">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the image you want to generate..."
          className="w-full p-4 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500 bg-white"
          onKeyDown={(e) => e.key === 'Enter' && generateImages()}
        />
        <button
          onClick={generateImages}
          disabled={isGenerating || !prompt.trim()}
          className="mt-4 w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
        >
          {isGenerating ? 'Generating...' : 'Generate Images'}
        </button>
      </div>

      {error && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 font-medium">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        {[0, 1, 2, 3].map((index) => {
          const image = images[index];
          const isLoading = isGenerating && !image;
          const isBlurred = isGenerating && image;

          return (
            <motion.div
              key={index}
              className={`relative aspect-square rounded-lg overflow-hidden ${
                isLoading ? 'bg-gray-200 animate-pulse' : ''
              }`}
              whileHover={{ scale: 1.02 }}
              onClick={() => image && setSelectedImage(image.id)}
            >
              {image && (
                <img
                  src={image.url}
                  alt={`Generated image ${index + 1}`}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    isBlurred ? 'blur-lg' : ''
                  }`}
                />
              )}
              {selectedImage === image?.id && (
                <div className="absolute inset-0 bg-blue-600 bg-opacity-20 border-4 border-blue-600" />
              )}
            </motion.div>
          );
        })}
      </div>

      {images.length > 0 && !isGenerating && (
        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-gray-900">
            Click on your favorite image to select it
          </p>
        </div>
      )}
    </div>
  );
} 