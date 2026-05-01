import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="flex-grow px-4 md:px-10">
        <Hero />
      </div>
    </div>
  );
}