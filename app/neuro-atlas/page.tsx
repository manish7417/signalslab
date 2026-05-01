"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function NeuroAtlas() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Neuro Atlas</h1>
            <p className="text-gray-400 text-lg">
              Comprehensive neural mapping and brain anatomy reference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Brain Regions</h2>
              <p className="text-gray-400">
                Detailed mapping of functional and anatomical brain regions
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Neural Pathways</h2>
              <p className="text-gray-400">
                Interactive visualization of neural connections and circuits
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Anatomical Reference</h2>
              <p className="text-gray-400">
                Detailed 3D models and cross-sections of brain anatomy
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Functional Mapping</h2>
              <p className="text-gray-400">
                Correlation between brain structure and function
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}