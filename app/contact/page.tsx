"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-400 text-lg">
              Get in touch with our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-cyan-400 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold mb-2">Location</h3>
                  <p className="text-gray-400">AIIMS, New Delhi<br />India</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-cyan-400 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <a href="mailto:contact@signalslab.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    contact@signalslab.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-cyan-400 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <a href="tel:+911126594000" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    +91 (11) 2659 4000
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h2 className="text-2xl font-bold mb-6">Send Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:border-cyan-400 outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:border-cyan-400 outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:border-cyan-400 outline-none transition-colors duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-black font-bold py-2 rounded transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}