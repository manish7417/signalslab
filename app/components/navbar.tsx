export default function Navbar() {
  return (
 
      <nav className="flex justify-between mb-10 px-10 py-7 text-white">
        <h1 className="text-xl font-bold">SignalsLab</h1>
        <div className="space-x-6">
          <a href="#">Home</a>
          <a href="#">Research</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>
  );
}