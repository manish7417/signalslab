"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function Research() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Research</h1>
            <p className="text-gray-400 text-lg">
              Cutting-edge research in neuroscience, AI, and signal processing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Brain Signal Analysis</h2>
              <p className="text-gray-400">
                Advanced techniques for analyzing and interpreting brain signals using deep learning
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Neuroimaging</h2>
              <p className="text-gray-400">
                State-of-the-art neuroimaging methods combining MRI and computational analysis
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Clinical Applications</h2>
              <p className="text-gray-400">
                Translating research findings into practical clinical tools and diagnostics
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Signal Processing</h2>
              <p className="text-gray-400">
                Innovative signal processing algorithms for biomedical applications
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}