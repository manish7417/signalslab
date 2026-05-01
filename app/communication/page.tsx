"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function Communication() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Communication</h1>
            <p className="text-gray-400 text-lg">
              Sharing research, collaboration, and scientific communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Publications</h2>
              <p className="text-gray-400">
                Access our latest research papers and findings
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Seminars</h2>
              <p className="text-gray-400">
                Regular talks and presentations on neuroscience topics
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Collaborations</h2>
              <p className="text-gray-400">
                Partner with us on groundbreaking research projects
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition-colors duration-300">
              <h2 className="text-xl font-bold mb-3">Newsletter</h2>
              <p className="text-gray-400">
                Stay updated with our latest news and discoveries
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}