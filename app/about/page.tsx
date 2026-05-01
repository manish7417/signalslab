"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About SignalsLab</h1>
            <p className="text-gray-400 text-lg">
              Exploring the intersection of artificial intelligence, neuroscience, and signal processing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To advance understanding of brain signals through cutting-edge AI and signal processing technologies, 
                making neuroimaging and brain analysis accessible to researchers and clinicians worldwide.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To become a leading platform for neuroscience research, combining MRI physics, NMR spectroscopy, 
                and AI to unlock new insights about the human brain.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <p className="text-gray-300">
              AIIMS, New Delhi<br />
              India
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}