"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function NMR() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">NMR Spectroscopy</h1>
            <p className="text-gray-400 text-lg">
              Nuclear Magnetic Resonance for chemical and biological analysis
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold mb-3">1H NMR Spectroscopy</h2>
              <p className="text-gray-300 mb-2">
                Proton NMR for molecular structure determination and chemical analysis
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold mb-3">13C NMR Spectroscopy</h2>
              <p className="text-gray-300 mb-2">
                Carbon NMR for identifying functional groups and carbon skeletons
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold mb-3">2D NMR Techniques</h2>
              <p className="text-gray-300 mb-2">
                COSY, HSQC, and other advanced NMR methods for complex structures
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold mb-3">In Vivo MR Spectroscopy</h2>
              <p className="text-gray-300 mb-2">
                Non-invasive analysis of metabolites in living tissue
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}