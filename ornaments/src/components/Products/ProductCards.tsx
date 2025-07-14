"use client"
import { Product } from "@/interfaces/Product"
import { useState } from "react"

export const ProductCards = ({ data }: {
    data: Product
}) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isImageLoaded, setIsImageLoaded] = useState(false)

    return (
        <div className="w-full flex flex-col gap-6 justify-center items-center p-4">
            {/* Enhanced Product Card */}
            <div 
                className="group relative w-full max-w-md bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Gradient overlay for premium look */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                {/* Image Container */}
                <div className="relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 animate-pulse transition-opacity duration-300 ${isImageLoaded ? 'opacity-0' : 'opacity-100'}`}></div>
                    <img
                        src={data.src}
                        alt={data.title}
                        className={`w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-all duration-700 group-hover:scale-110 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setIsImageLoaded(true)}
                    />
                    
                    {/* Floating discount badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                        New!
                    </div>
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Container */}
                <div className="relative p-6 space-y-4">
                    {/* Title with animation */}
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
                        {data.title}
                    </h2>
                    
                    {/* Price section */}
                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-pink-600">₹{data.price}</span>
                        {/* Optionally show a fake old price and discount */}
                        <span className="text-lg text-gray-400 line-through">₹{Math.round(data.price * 1.2)}</span>
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm font-medium">
                            {`${Math.round(100 - (data.price / (data.price * 1.2)) * 100)}% OFF`}
                        </span>
                    </div>
                    
                    {/* Rating stars */}
                    <div className="flex items-center gap-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <svg 
                                    key={i} 
                                    className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'} transition-colors duration-200`}
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">(4.2) • 127 reviews</span>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-3 pt-2">
                        <button className={`flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 transform ${isHovered ? 'hover:shadow-xl hover:scale-105' : ''} active:scale-95`}>
                            <span className="flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0V9a2 2 0 012-2h2m7 0V9a2 2 0 012-2h2m-4 2v2"/>
                                </svg>
                                Add to Cart
                            </span>
                        </button>
                        
                        <button className="p-3 border-2 border-pink-200 text-pink-500 rounded-xl hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 transform hover:scale-105 active:scale-95">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                    
                    {/* Quick view link */}
                    <div className="text-center">
                        <button className="text-sm text-pink-500 hover:text-pink-600 font-medium transition-colors duration-200 hover:underline">
                            Quick View Details
                        </button>
                    </div>
                </div>
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 w-1/3 h-full opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300"></div>
            </div>
        </div>
    )
}