
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { About } from './components/About';
import Hero from './components/Hero';
import { Contact } from './components/Contact';

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();

  // scroll to section when URL changes
  useEffect(() => {
    const section = location.pathname.replace('/', '').toLowerCase();
    if (section === 'about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <div ref={aboutRef}><About /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  );
};

export default App;

