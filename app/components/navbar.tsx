"use client";

import { useState } from "react";
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const data = [
  "Home",
  "Research",
  "MRI Physics",
  "Speech & Signal",
  "NMR",
  "Neuro Atlas",
  "Stat & Coding",
  "Communication",
  "About",
  "Contact",
];

const pathMap: Record<string, string> = {
  "Home": "/",
  "Research": "/research",
  "MRI Physics": "/mri-physics",
  "Speech & Signal": "/speech-signal",
  "NMR": "/nmr",
  "Neuro Atlas": "/neuro-atlas",
  "Stat & Coding": "/stat-coding",
  "Communication": "/communication",
  "About": "/about",
  "Contact": "/contact",
};

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (itemPath: string): boolean => {
    return pathname === itemPath;
  };

  const filtered = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && filtered.length > 0) {
      router.push(pathMap[filtered[0]] || "/");
      setQuery("");
      setIsOpen(false);
    }
  };

  const handleNavigation = (item: string) => {
    router.push(pathMap[item] || "/");
    setIsOpen(false);
    setQuery("");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50 border-b border-gray-800 h-16 md:h-20">
        <div className="w-full max-w-full px-4 md:px-10 lg:px-10 h-full flex justify-center">
          <div className="w-full flex justify-between items-center">

            
            {/* Logo */}
            <button
              onClick={() => handleNavigation("Home")}
              className="text-xl font-bold hover:text-cyan-400 transition-colors duration-300"
            >
              SignalsLab
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {data.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(pathMap[item])
                      ? "text-cyan-400 underline underline-offset-4"
                      : "hover:text-cyan-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Desktop Search */}
            <div className="hidden md:block relative w-48">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-full bg-gray-900 outline-none text-sm border border-gray-700 focus:border-cyan-400 transition-colors duration-300"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSearchEnter}
              />

              {/* Dropdown */}
              {query.length > 0 && (
                <div className="absolute top-12 left-0 right-0 bg-gray-900 border border-gray-700 rounded shadow-lg z-[100] max-h-24 overflow-y-auto scrollbar-hide">
                  {filtered.length > 0 ? (
                    filtered.map((item, index) => (
                      <div
                        key={index}
                        className="p-3 text-white hover:bg-gray-800 cursor-pointer transition-colors duration-300 border-b border-gray-800 last:border-b-0"
                        onClick={() => handleNavigation(item)}
                      >
                        {item}
                      </div>
                    ))
                  ) : (
                    <div className="p-3 text-gray-400">No results</div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40 mt-16"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-16 right-0 left-0 bg-gray-900 text-white z-50 border-b border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-full bg-gray-800 outline-none text-sm border border-gray-700 focus:border-cyan-400 transition-colors duration-300"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSearchEnter}
              />

              {/* Mobile Search Dropdown */}
              {query.length > 0 && (
                <div className="absolute top-12 left-0 right-0 bg-gray-900 border border-gray-700 rounded shadow-lg z-[100] max-h-24 overflow-y-auto scrollbar-hide">
                  {filtered.length > 0 ? (
                    filtered.map((item, index) => (
                      <div
                        key={index}
                        className="p-3 text-white hover:bg-gray-800 cursor-pointer transition-colors duration-300 border-b border-gray-800 last:border-b-0"
                        onClick={() => handleNavigation(item)}
                      >
                        {item}
                      </div>
                    ))
                  ) : (
                    <div className="p-3 text-gray-400">No results</div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Items */}
            {data.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className={`block w-full text-left py-2 px-2 rounded transition-colors duration-300 ${
                  isActive(pathMap[item])
                    ? "bg-cyan-400 bg-opacity-20 text-cyan-400 underline underline-offset-2"
                    : "hover:bg-gray-800 hover:text-cyan-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}