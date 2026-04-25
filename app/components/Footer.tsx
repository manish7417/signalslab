export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20 px-6 md:px-10 py-10">
      
      <div className="flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left - Logo */}
        <div>
          <h1 className="text-xl font-bold">SignalsLab</h1>
          <p className="text-gray-400 mt-2">
            Future of AI & Neuroscience
          </p>
        </div>

        {/* Middle - Services */}
        <div className="grid grid-cols-2 gap-4 text-gray-300">
          <p>AI Research</p>
          <p>Brain Mapping</p>
          <p>Data Analysis</p>
          <p>Neural Systems</p>
        </div>

        {/* Right - Location */}
        <div className="text-gray-400">
          <p>India</p>
          <p>New Delhi</p>
        </div>

      </div>

    </footer>
  );
}