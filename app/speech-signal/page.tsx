"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function SpeechSignal() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-12">
        
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        {/* Page Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Speech & Signal Processing</h1>
            <p className="text-gray-400 text-lg">
              Advanced techniques for analyzing speech and biomedical signals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Speech Recognition</h2>
              <p className="text-gray-400">
                Modern approaches to speech analysis and recognition using deep learning
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Signal Filtering</h2>
              <p className="text-gray-400">
                Noise reduction and feature extraction from complex biological signals
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Frequency Analysis</h2>
              <p className="text-gray-400">
                Fourier and wavelet transforms for signal decomposition and analysis
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Feature Extraction</h2>
              <p className="text-gray-400">
                Identifying key features for classification and pattern recognition
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}