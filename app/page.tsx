export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen p-10">
      
      {/* Navbar */}
      <nav className="flex justify-between mb-10">
        <h1 className="text-xl font-bold">SignalsLab</h1>
        <div className="space-x-6">
          <a href="#">Home</a>
          <a href="#">Research</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-between">
        
        {/* Left */}
        <div>
          <h1 className="text-5xl font-bold mb-6">
            Exploring Intelligence Through Signals
          </h1>
          <p className="text-gray-400 mb-6">
            AI + Brain + Future Technology
          </p>
          <button className="bg-white text-black px-6 py-2 rounded">
            Get Started with SignalsLab ki
          </button>
        </div>

        {/* Right */}
        <div className="w-[400px] h-[400px] bg-gray-800 flex items-center justify-center">
          3D Brain Coming Soon
        </div>

      </div>
    </div>
  );
}