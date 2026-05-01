"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function MRIPhysics() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">MRI Physics</h1>
            <p className="text-gray-400 text-lg">
              Understanding the fundamental physics behind Magnetic Resonance Imaging
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold mb-3">Nuclear Magnetism</h2>
              <p className="text-gray-300 mb-2">
                The foundation of MRI: how nuclear spins align in magnetic fields and how we can manipulate them
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold mb-3">Spin Relaxation</h2>
              <p className="text-gray-300 mb-2">
                T1 and T2 relaxation times and their role in contrast generation
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold mb-3">Pulse Sequences</h2>
              <p className="text-gray-300 mb-2">
                How radiofrequency pulses and gradients create detailed images of tissue
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}