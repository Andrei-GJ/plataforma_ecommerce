'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Distressed Tote Leather Bag Leather",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center",
      price: "89.99 $"
    },
    {
      id: 2,
      name: "Womens Cognac Leather Elastic Straps",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=300&fit=crop&crop=center",
      price: "124.50 $"
    },
    {
      id: 3,
      name: "Distressed Tote Leather Bag Leather Bag",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&crop=center&sat=-100&hue=240",
      price: "95.00 $"
    },
    {
      id: 4,
      name: "High Top Canvas Shoes",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop&crop=center",
      price: "67.25 $"
    },
    {
      id: 5,
      name: "Rose Gold Moissanite Vintage Wedding Ring Set",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop&crop=center",
      price: "3,344.13 $"
    }
  ];

  const itemsPerView = 4;
  const maxIndex = products.length - 1; // Permitir navegar hasta el último elemento

  const nextSlide = () => {
    setCurrentIndex(prev => {
      if (prev >= maxIndex) {
        return 0; // Volver al inicio cuando llegue al final
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prev => {
      if (prev <= 0) {
        return maxIndex; // Ir al final cuando esté al inicio
      }
      return prev - 1;
    });
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  return (
    <div className="max-w-300 mx-auto py-8 mt-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-normal text-gray-800">
          Descubra artículos únicos seleccionados para ti
        </h2>
        <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1">
          Ver todo
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:shadow-xl transition-shadow"
        >
          <ChevronLeft size={24} className="text-gray-600" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:shadow-xl transition-shadow"
        >
          <ChevronRight size={24} className="text-gray-600" />
        </button>

        {/* Products Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / products.length)}%)` }}
          >
            {products.map((product) => (
              <div 
                key={product.id}
                className="flex-none w-1/4 min-w-0"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
                  {/* Image Container */}
                  <div className="relative aspect-square bg-gray-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Heart Icon */}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                    >
                      <Heart 
                        size={20} 
                        className={`transition-colors ${
                          favorites.has(product.id) 
                            ? 'text-red-500 fill-red-500' 
                            : 'text-gray-400 hover:text-red-400'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-5 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-lg font-semibold text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: products.length }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;