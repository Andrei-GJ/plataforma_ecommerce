"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState(new Set());

  const itemsPerView = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://back-ecomerce-vz7f.onrender.com/all_products");
        const data = await res.json();
        setProducts(data.slice(0, 10)); // Mostrar solo los primeros 10
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };

    fetchProducts();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= products.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? products.length - 1 : prev - 1
    );
  };

  const toggleFavorite = (productId) => {
    setFavorites((prev) => {
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
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-black">
          Descubra artículos únicos seleccionados para ti
        </h2>
        <Link
          href="/products"
          className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1"
        >
          Ver todo
          <ChevronRight size={18} />
        </Link>
      </div>

      <div className="relative">
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

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / products.length)}%)`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-none w-1/4 min-w-0"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
                  <div className="relative aspect-square bg-gray-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name_product}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                    >
                      <Heart
                        size={20}
                        className={`transition-colors ${
                          favorites.has(product.id)
                            ? "text-red-500 fill-red-500"
                            : "text-gray-400 hover:text-red-400"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-800 capitalize line-clamp-2 leading-5 mb-2">
                      {product.name_product}
                    </h3>
                    <p className="text-lg font-semibold text-gray-900">
                      ${product.price.toFixed(3)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: products.length }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;