
import React from 'react';

const Header = () => {
  return (
    <header className="relative py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Main title with glow effect */}
        <h1 className="font-orbitron font-black text-6xl md:text-8xl text-transparent bg-clip-text bg-rick-gradient animate-glow mb-4">
          RICK & MORTY
        </h1>
        
        {/* Subtitle */}
        <div className="relative">
          <h2 className="font-exo font-light text-2xl md:text-3xl text-rick-green-500 tracking-wider mb-2">
            CHARACTER EXPLORER
          </h2>
          
          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px bg-gradient-to-r from-transparent via-rick-green-500 to-transparent flex-1 max-w-32"></div>
            <div className="w-3 h-3 bg-rick-green-500 rounded-full animate-pulse-glow"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-rick-green-500 to-transparent flex-1 max-w-32"></div>
          </div>
        </div>
        
        {/* Portal-style accent */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-portal-gradient opacity-10 rounded-full blur-3xl -z-10"></div>
      </div>
    </header>
  );
};

export default Header;
