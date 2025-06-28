'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ModernSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: "What's New!",
      subtitle: "Just millions of people selling the things they love.",
      background: "bg-gradient-to-br from-purple-900 via-blue-900 to-red-900"
    },
    {
      title: "Discover Amazing",
      subtitle: "Find unique items from creators around the world.",
      background: "bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"
    },
    {
      title: "Create & Sell",
      subtitle: "Turn your passion into profit with our platform.",
      background: "bg-gradient-to-br from-red-900 via-purple-900 to-blue-900"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-300 mx-auto mt-5">
      {/* Main slider container */}
      <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          >
            {/* Background with gradient and animated shapes */}
            <div className={`relative w-full h-full ${slide.background}`}>
              {/* Animated 3D shapes */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Main curved shape */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-30">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500/40 to-purple-500/40 animate-pulse"></div>
                </div>
                
                {/* Secondary shapes */}
                <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500/30 to-red-500/30 animate-bounce"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 animate-pulse"></div>
                
                {/* Flowing curves */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
                    <path
                      d="M0,300 Q250,200 500,300 T1000,300 L1000,500 L0,500 Z"
                      fill="url(#gradient1)"
                      opacity="0.3"
                      className="animate-pulse"
                    />
                    <path
                      d="M0,350 Q300,250 600,350 T1000,350 L1000,500 L0,500 Z"
                      fill="url(#gradient2)"
                      opacity="0.2"
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="50%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#EF4444" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#EC4899" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeInUp">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 animate-fadeInUp animation-delay-200">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center space-x-3 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default ModernSlider;