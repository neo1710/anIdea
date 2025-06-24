"use client"
import React, { useState, useEffect } from 'react';
import { FaAngleRight, FaChevronLeft } from "react-icons/fa6";
import { FaPause, FaPlay } from "react-icons/fa";
import { photos } from '../data/db'; // Import your photo data

const PhotoSlider = () => {
    // Dummy photo data - replace with your actual images

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlay]);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % photos.length);
        setTimeout(() => setIsAnimating(false), 600);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
        setTimeout(() => setIsAnimating(false), 600);
    };

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 600);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlay(!isAutoPlay);
    };

    return (
        <div className="relative w-[90%] sm:w-[65%] mx-auto bg-none rounded-2xl overflow-hidden p-4">
            {/* Main slider container */}
            <div className="relative h-96 md:h-[450px] overflow-hidden">
                {/* Slides */}
                <div
                    className="flex transition-transform duration-600 ease-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {photos.map((photo, index) => (
                        <div key={photo.id} className="min-w-full h-full relative">
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold bg-gradient-to-br from-pink-300 via-pink-500 to-pink-700 bg-clip-text text-transparent">{photo.title}</h3>
                                <p className="text-sm opacity-90">Slide {index + 1} of {photos.length}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation arrows */}
                <button
                    onClick={prevSlide}
                    disabled={isAnimating}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 disabled:bg-white/10 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed"
                >
                    <FaChevronLeft size={24} />
                </button>

                <button
                    onClick={nextSlide}
                    disabled={isAnimating}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 disabled:bg-white/10 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed"
                >
                    <FaAngleRight size={24} />
                </button>

                {/* Auto-play toggle */}
                <button
                    onClick={toggleAutoPlay}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                    {isAutoPlay ? <FaPause size={20} /> : <FaPlay size={20} />}
                </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center items-center space-x-3 py-6 bg-none">
                {photos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        disabled={isAnimating}
                        className={`transition-all duration-300 rounded-full ${index === currentSlide
                                ? 'w-8 h-3 bg-pink-500'
                                : 'w-3 h-3 bg-rose-300 hover:bg-gray-400'
                            } disabled:cursor-not-allowed`}
                    />
                ))}
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-none">
                <div
                    className={`h-full bg-gradient-to-r from-pink-500 to-rose-600 transition-all duration-300 ${isAutoPlay ? 'animate-pulse' : ''
                        }`}
                    style={{
                        width: `${((currentSlide + 1) / photos.length) * 100}%`,
                        transition: 'width 0.6s ease-out'
                    }}
                />
            </div>
        </div>
    );
};

export default PhotoSlider;