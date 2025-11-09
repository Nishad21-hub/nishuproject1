import { useState } from 'react';
import Hero from './components/Hero';
import FeaturedCars from './components/FeaturedCars';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <FeaturedCars />
      <Features />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
