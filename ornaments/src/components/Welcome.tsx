"use client"
import { useState, useEffect } from 'react';

export default function OrnamentsWelcome() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .gradient-text {
          background: linear-gradient(135deg, #f472b6, #ec4899, #db2777, #be185d);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease-in-out infinite;
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .slide-up {
          animation: slideUp 1s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .clay-blob {
          background: linear-gradient(135deg, #fef3c7, #fed7aa, #fecaca);
          border-radius: 50% 40% 60% 30%;
          animation: morph 8s ease-in-out infinite;
        }
        
        @keyframes morph {
          0%, 100% { border-radius: 50% 40% 60% 30%; }
          25% { border-radius: 30% 60% 40% 50%; }
          50% { border-radius: 60% 30% 50% 40%; }
          75% { border-radius: 40% 50% 30% 60%; }
        }
        
        .sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        .pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .glass-effect {
          backdrop-filter: blur(16px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .custom-shadow {
          box-shadow: 0 25px 50px -12px rgba(236, 72, 153, 0.25);
        }
      `}</style>
      
      <div className="relative w-full py-16 px-4 overflow-hidden mt-12">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating clay blobs */}
          <div className="clay-blob absolute top-10 left-10 w-20 h-20 opacity-20 floating"></div>
          <div className="clay-blob absolute top-32 right-16 w-16 h-16 opacity-15 floating" style={{ animationDelay: '2s' }}></div>
          <div className="clay-blob absolute bottom-20 left-1/4 w-12 h-12 opacity-10 floating" style={{ animationDelay: '4s' }}></div>
          
          {/* Sparkle effects */}
          <div className="absolute top-20 right-1/3 w-2 h-2 bg-pink-400 rounded-full sparkle opacity-60"></div>
          <div className="absolute bottom-32 right-20 w-1 h-1 bg-rose-300 rounded-full sparkle opacity-80" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-20 w-1.5 h-1.5 bg-pink-500 rounded-full sparkle opacity-50" style={{ animationDelay: '3s' }}></div>
        </div>
        
        {/* Main Content */}
        <div className="relative max-w-6xl mx-auto">
          <div className={`glass-effect rounded-3xl p-8 md:p-12 custom-shadow transition-all duration-1000 ${
            isVisible ? 'slide-up' : ''
          }`}>
            
            {/* Main Heading */}
            <div className={`text-center mb-8 transition-all duration-1000 ${
              isVisible ? 'slide-up' : ''
            }`} style={{ animationDelay: '0.2s' }}>
              <h1 className="gradient-text text-3xl md:text-5xl lg:text-6xl font-bold leading-tight floating">
                Welcome to Ornaments
              </h1>
              <div className="mt-4">
                <span className="gradient-text text-xl md:text-2xl font-medium">
                  Where Clay Comes to Life!
                </span>
              </div>
            </div>
            
            {/* Decorative separator */}
            <div className={`flex justify-center mb-8 transition-all duration-1000 ${
              isVisible ? 'slide-up' : ''
            }`} style={{ animationDelay: '0.4s' }}>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full pulse-slow"></div>
                <div className="w-2 h-2 bg-rose-400 rounded-full pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full pulse-slow" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
            
            {/* Description */}
            <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible ? 'slide-up' : ''
            }`} style={{ animationDelay: '0.6s' }}>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                Discover our charming collection of{' '}
                <span className="font-semibold text-pink-600 hover:text-pink-700 transition-colors duration-300">
                  handmade clay keychains
                </span>
                ,{' '}
                <span className="font-semibold text-rose-600 hover:text-rose-700 transition-colors duration-300">
                  fridge magnets
                </span>
                , and{' '}
                <span className="font-semibold text-pink-600 hover:text-pink-700 transition-colors duration-300">
                  adorable clay charms
                </span>
                {' '}– each piece crafted with love and a touch of whimsy.
              </p>
              
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-rose-100 px-6 py-3 rounded-full border border-pink-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <span className="text-pink-700 font-medium">✨</span>
                <span className="text-pink-800 font-medium">
                  Have something special in mind? We happily take custom requests!
                </span>
                <span className="text-pink-700 font-medium">🎨</span>
              </div>
            </div>
            
            {/* Call to action buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-10 transition-all duration-1000 ${
              isVisible ? 'slide-up' : ''
            }`} style={{ animationDelay: '0.8s' }}>
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Browse Collection
              </button>
              <button className="border-2 border-pink-400 text-pink-600 hover:bg-pink-50 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Custom Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}