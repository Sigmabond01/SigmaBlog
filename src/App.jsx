
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { About } from './components/About';
import Hero from './components/Hero';
import JapaneseNightlifeAboutCards from './components/ui/Aboutcard';

function App() {
  const aboutRef = useRef(null);
  const location = useLocation();

  // scroll to section when URL changes
  useEffect(() => {
    const section = location.pathname.replace('/', '').toLowerCase();
    if (section === 'about') aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [location]);

  return (
    <>
      <Hero />
      <div ref={aboutRef}><JapaneseNightlifeAboutCards/></div>
    </>
  );
}

export default App;

