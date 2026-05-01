"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function StatCoding() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Statistics & Coding</h1>
            <p className="text-gray-400 text-lg">
              Tools and techniques for data analysis and computational neuroscience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Statistical Methods</h2>
              <p className="text-gray-400">
                Advanced statistical techniques for neuroscience data analysis
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Python & MATLAB</h2>
              <p className="text-gray-400">
                Programming tools for signal processing and data visualization
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Machine Learning</h2>
              <p className="text-gray-400">
                Classification and prediction models for brain data
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Data Visualization</h2>
              <p className="text-gray-400">
                Creating meaningful visualizations of complex neural data
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}