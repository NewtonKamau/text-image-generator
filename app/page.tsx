"use client"

import { useState } from 'react';
import * as fal from "@fal-ai/serverless-client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

fal.config({
  credentials: process.env.NEXT_PUBLIC_FAL_KEY,
});

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateImage = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await fal.run('fal-ai/fast-sdxl', {
        input: {
          prompt: prompt,
        },
      });

      if (result.images && result.images[0]) {
        setImageUrl(result.images[0].url);
      }
    } catch (error) {
      console.error('Error generating image:', error);
      setError('Failed to generate image. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Text to Image AI</h1>
      <form onSubmit={generateImage} className="mb-6">
        <div className="mb-4">
          <Label htmlFor="prompt">Enter your prompt</Label>
          <Input
            id="prompt"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A serene landscape with mountains and a lake"
            className="w-full"
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Generate Image'}
        </Button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {imageUrl && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Generated Image:</h2>
          <img src={imageUrl} alt="Generated" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  );
}