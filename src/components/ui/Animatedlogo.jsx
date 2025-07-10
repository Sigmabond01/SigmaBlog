import React, { useState, useEffect } from 'react';

const AnimatedBlogText = () => {
  const [currentText, setCurrentText] = useState('シグマブログ');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const texts = ['シグマブログ', 'SigmaBlog'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentText(prev =>
          prev === 'シグマブログ' ? 'SigmaBlog' : 'シグマブログ'
        );
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent p-0 m-0">
      <h1
        className={`${
          currentText === 'シグマブログ' ? 'text-3xl' : 'text-3xl'
        } font-bold text-white transition-all duration-500 font-mincho ${
          isAnimating ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
        }`}
        style={{
          textShadow: '0 0 20px rgba(255,255,255,0.3)',
          margin: 0,
          padding: 0,
        }}
      >
        {currentText}
      </h1>
    </div>
  );
};

export default AnimatedBlogText;
