import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-gray-800 mt-auto">
      <div className="w-full px-4 md:px-10 lg:px-10 py-12 md:py-16 flex justify-center">
        <div className="w-full max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Left - Logo & Description */}
          <div className="flex flex-col justify-start">
            <h1 className="text-2xl font-bold mb-3">SignalsLab</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Exploring Intelligence Through Signals
            </p>
            <p className="text-gray-500 text-xs mt-4">
              AI + Brain + Future Technology
            </p>
          </div>

          {/* Middle - Navigation */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-sm">Pages</h3>
              <nav className="space-y-3 text-sm text-gray-400">
                <Link href="/" className="block hover:text-cyan-400 transition-colors duration-300">Home</Link>
                <Link href="/research" className="block hover:text-cyan-400 transition-colors duration-300">Research</Link>
                <Link href="/mri-physics" className="block hover:text-cyan-400 transition-colors duration-300">MRI Physics</Link>
                <Link href="/nmr" className="block hover:text-cyan-400 transition-colors duration-300">NMR</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm">Resources</h3>
              <nav className="space-y-3 text-sm text-gray-400">
                <Link href="/neuro-atlas" className="block hover:text-cyan-400 transition-colors duration-300">Neuro Atlas</Link>
                <Link href="/speech-signal" className="block hover:text-cyan-400 transition-colors duration-300">Speech & Signal</Link>
                <Link href="/stat-coding" className="block hover:text-cyan-400 transition-colors duration-300">Stat & Coding</Link>
                <Link href="/communication" className="block hover:text-cyan-400 transition-colors duration-300">Communication</Link>
              </nav>
            </div>
          </div>

          {/* Right - Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Location</h3>
            <p className="text-gray-400 text-sm">
              AIIMS, India<br />
              New Delhi
            </p>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                Get in Touch →
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 SignalsLab. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/about" className="hover:text-gray-400 transition-colors duration-300">About</Link>
            <Link href="/contact" className="hover:text-gray-400 transition-colors duration-300">Contact</Link>
            <a href="#" className="hover:text-gray-400 transition-colors duration-300">Privacy</a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
