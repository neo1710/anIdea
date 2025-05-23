"use client"
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Moving bubbles */}
      <div className="absolute inset-0">
        {/* Large bubbles */}
        <div className="absolute w-20 h-20 bg-white/30 rounded-full animate-float-up" 
             style={{left: '10%', animationDelay: '0s', animationDuration: '6s'}}></div>
        <div className="absolute w-16 h-16 bg-blue-200/40 rounded-full animate-float-up" 
             style={{left: '20%', animationDelay: '1s', animationDuration: '8s'}}></div>
        <div className="absolute w-24 h-24 bg-indigo-200/30 rounded-full animate-float-up" 
             style={{left: '30%', animationDelay: '2s', animationDuration: '7s'}}></div>
        <div className="absolute w-18 h-18 bg-purple-200/35 rounded-full animate-float-up" 
             style={{left: '45%', animationDelay: '0.5s', animationDuration: '9s'}}></div>
        <div className="absolute w-22 h-22 bg-cyan-200/40 rounded-full animate-float-up" 
             style={{left: '60%', animationDelay: '3s', animationDuration: '6.5s'}}></div>
        <div className="absolute w-14 h-14 bg-teal-200/45 rounded-full animate-float-up" 
             style={{left: '75%', animationDelay: '1.5s', animationDuration: '8.5s'}}></div>
        <div className="absolute w-26 h-26 bg-sky-200/30 rounded-full animate-float-up" 
             style={{left: '85%', animationDelay: '4s', animationDuration: '7.5s'}}></div>
        
        {/* Small bubbles */}
        <div className="absolute w-8 h-8 bg-white/50 rounded-full animate-float-up" 
             style={{left: '15%', animationDelay: '2.5s', animationDuration: '5s'}}></div>
        <div className="absolute w-6 h-6 bg-blue-300/60 rounded-full animate-float-up" 
             style={{left: '25%', animationDelay: '3.5s', animationDuration: '4.5s'}}></div>
        <div className="absolute w-10 h-10 bg-indigo-300/50 rounded-full animate-float-up" 
             style={{left: '40%', animationDelay: '1.2s', animationDuration: '5.5s'}}></div>
        <div className="absolute w-7 h-7 bg-purple-300/55 rounded-full animate-float-up" 
             style={{left: '55%', animationDelay: '4.2s', animationDuration: '4.8s'}}></div>
        <div className="absolute w-9 h-9 bg-cyan-300/45 rounded-full animate-float-up" 
             style={{left: '70%', animationDelay: '0.8s', animationDuration: '5.2s'}}></div>
        <div className="absolute w-12 h-12 bg-teal-300/40 rounded-full animate-float-up" 
             style={{left: '90%', animationDelay: '2.8s', animationDuration: '6.2s'}}></div>
      </div>

      {/* Floating diagonal lines */}
      <div className="absolute inset-0">
        <div className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-300/50 to-transparent animate-diagonal-float" 
             style={{left: '20%', top: '10%', animationDelay: '0s'}}></div>
        <div className="absolute w-px h-16 bg-gradient-to-b from-transparent via-indigo-300/40 to-transparent animate-diagonal-float" 
             style={{left: '50%', top: '30%', animationDelay: '2s'}}></div>
        <div className="absolute w-px h-24 bg-gradient-to-b from-transparent via-purple-300/45 to-transparent animate-diagonal-float" 
             style={{left: '80%', top: '20%', animationDelay: '4s'}}></div>
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(100vh) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(30px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes diagonal-float {
          0% {
            transform: translateY(100vh) translateX(-20px) rotate(45deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(20px) rotate(45deg);
            opacity: 0;
          }
        }
        
        .animate-float-up {
          animation: float-up linear infinite;
        }
        
        .animate-diagonal-float {
          animation: diagonal-float 8s linear infinite;
        }
        
        .w-18 { width: 4.5rem; }
        .h-18 { height: 4.5rem; }
        .w-22 { width: 5.5rem; }
        .h-22 { height: 5.5rem; }
        .w-26 { width: 6.5rem; }
        .h-26 { height: 6.5rem; }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;