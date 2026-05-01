
import TypingText from "./TypingText";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between text-white gap-12 py-12 md:py-20">
      
      {/* Left */}
      <div className="flex-1 text-center lg:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Exploring{' '}
          <span className="inline-flex min-w-[12ch] items-center">
            <TypingText words={["Intelligence", "AI", "Brain","Neuroscience"]} colorClass="text-yellow-400" speed={140} />
          </span>{' '}
          Through Signals
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl">
          AI + Brain + Future Technology
        </p>
        <div className="flex gap-4 justify-center lg:justify-start">
          <a
            href="/research"
            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 rounded font-semibold transition-colors duration-300"
          >
            Explore Research
          </a>
          <a
            href="/contact"
            className="px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-600 hover:border-cyan-600 hover:text-white rounded font-semibold transition-colors duration-300"
          >
            Get in Touch →
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 w-full h-80 md:h-96 lg:h-[420px]">
        <iframe
          title="HUD Brain"
          className="w-full h-full rounded-lg"
          allowFullScreen
          src="https://sketchfab.com/models/25ed09ee28404810a009df6f4b3a5fda/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_controls=0&ui_infos=0&ui_hint=0"
        ></iframe>
      </div>

    </div>
  );
}