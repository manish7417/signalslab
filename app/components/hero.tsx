// import Brain from "./Brain";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 mt-10 lg:mt-20 text-white gap-10">
      
      {/* Left */}
      <div className="text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Exploring Intelligence Through Signals
        </h1>
        <p className="text-gray-400 mb-6">
          AI + Brain + Future Technology
        </p>
      </div>

      {/* Right */}
      <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] 
      rounded-full ">
        
        <iframe
          title="Brain Model"
          className="w-full h-full"
          allowFullScreen
          src="https://sketchfab.com/models/6364b61822574f98ac52ad85f4d727fe/embed?autospin=1&autostart=1&ui_controls=0&ui_infos=0&transparent=1"
        ></iframe>

      </div>

    </div>
  );
}