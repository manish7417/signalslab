import Hero from './components/hero';
import Navbar from './components/navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />
      </div>

      <Footer />
    </div>
  );
}