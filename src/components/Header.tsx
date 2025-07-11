import React from 'react';

const Header = () => {
  return (
    <header className="relative py-16 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-multiverse-animated bg-[length:400%_400%] animate-multiverse-bg opacity-20"></div>
      
      <div className="absolute top-10 left-1/4 w-32 h-32 bg-portal-gradient rounded-full blur-xl animate-portal-pulse opacity-30"></div>
      <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-portal-gradient rounded-full blur-lg animate-portal-spin opacity-40"></div>
      
      <div className="absolute top-20 left-10 w-2 h-2 bg-rick-green-500 rounded-full animate-floating-particles opacity-70"></div>
      <div className="absolute top-32 right-16 w-3 h-3 bg-portal-blue-500 rounded-full animate-floating-particles opacity-60" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-24 left-20 w-2 h-2 bg-morty-yellow-500 rounded-full animate-floating-particles opacity-80" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-16 right-12 w-1 h-1 bg-space-purple-500 rounded-full animate-floating-particles opacity-50" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-6">
          <div className="inline-block relative">
            <div className="w-24 h-24 mx-auto bg-portal-gradient rounded-full animate-portal-spin opacity-80 flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-multiverse-dark-900 rounded-full flex items-center justify-center">
                <span className="text-rick-green-500 text-2xl font-bold">R&M</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-8">
          <h1 className="font-creepster font-black text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-rick-gradient mb-4 tracking-wider"
              style={{ textShadow: '0 0 8px rgba(0, 255, 136, 0.3), 0 0 16px rgba(0, 255, 136, 0.2)' }}>
            RICK & MORTY
          </h1>
          
          <div className="absolute inset-0 font-creepster font-black text-5xl md:text-7xl lg:text-8xl text-rick-green-500 opacity-10 animate-pulse" 
               style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}>
            RICK & MORTY
          </div>
        </div>
        
        <div className="relative mb-6">
          <h2 className="font-orbitron font-bold text-2xl md:text-4xl text-portal-blue-500 tracking-[0.2em] mb-4 opacity-80">
            CHARACTER FILTER
          </h2>
          
          <p className="font-exo text-lg md:text-xl text-rick-cyan-400 opacity-90 italic">
            Explore the Infinite Multiverse
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-6 mt-8">
          <div className="h-px bg-gradient-to-r from-transparent via-rick-green-500 to-portal-blue-500 flex-1 max-w-40 opacity-60"></div>
          
          <div className="relative">
            <div className="w-8 h-8 bg-portal-gradient rounded-full animate-portal-pulse opacity-60"></div>
            <div className="absolute inset-0 w-8 h-8 bg-rick-green-500 rounded-full animate-ping opacity-20"></div>
          </div>
          
          <div className="h-px bg-gradient-to-r from-portal-blue-500 via-space-purple-500 to-transparent flex-1 max-w-40 opacity-60"></div>
        </div>
        
        <div className="mt-6 opacity-40">
          <p className="font-orbitron text-xs text-rick-cyan-500 tracking-widest">
            C-137 • DIMENSION • MULTIVERSE
          </p>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-portal-gradient opacity-5 rounded-full blur-3xl animate-portal-spin -z-10"></div>
    </header>
  );
};

export default Header;
