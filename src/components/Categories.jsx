import React from 'react';

const CategoriesComponent = () => {
  return (
    <div className="max-w-300 mx-auto mt-8">
      <h2 className="text-xl font-normal text-gray-800 mb-8">Categories</h2>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-5">
        {/* Clothing & Shoes - Top Left */}
        <div className="relative rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105 bg-gradient-to-br from-green-400 via-green-300 to-lime-300">
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="flex justify-center items-center flex-1">
              {/* Nike Shoe Illustration */}
              <div className="relative">
                <svg width="200" height="120" viewBox="0 0 200 120" className="drop-shadow-lg">
                  {/* Shoe sole */}
                  <ellipse cx="100" cy="100" rx="90" ry="15" fill="rgba(255,255,255,0.3)"/>
                  {/* Shoe body */}
                  <path d="M20 80 Q30 60 60 55 L140 55 Q160 60 170 75 Q165 85 140 90 L60 90 Q30 85 20 80" fill="rgba(135,206,235,0.9)"/>
                  {/* Nike swoosh */}
                  <path d="M40 75 Q80 70 120 75 Q100 80 40 78" fill="rgba(255,255,255,0.8)"/>
                  {/* Laces */}
                  <circle cx="70" cy="65" r="2" fill="white"/>
                  <circle cx="85" cy="63" r="2" fill="white"/>
                  <circle cx="100" cy="63" r="2" fill="white"/>
                  <circle cx="115" cy="65" r="2" fill="white"/>
                  {/* Lace strings */}
                  <path d="M70 65 Q77 60 85 63 Q92 58 100 63 Q107 58 115 65" stroke="white" strokeWidth="1" fill="none"/>
                </svg>
              </div>
            </div>
            <h3 className="text-white text-xl font-semibold drop-shadow-md">Papelería</h3>
          </div>
        </div>

        {/* Home & Living - Top Center */}
        <div className="relative rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105">
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='homeGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23654321'/%3E%3Cstop offset='100%25' style='stop-color:%232F1B14'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23homeGrad)'/%3E%3C/svg%3E"
            alt="Home background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-amber-900/30 to-gray-800/70">
            <div className="p-6 flex flex-col justify-between h-full">
              <div className="flex justify-center items-center flex-1">
                {/* Home scene illustration */}
                <div className="relative">
                  <svg width="180" height="100" viewBox="0 0 180 100" className="drop-shadow-lg">
                    {/* Table */}
                    <rect x="20" y="60" width="140" height="8" fill="rgba(139,69,19,0.8)" rx="4"/>
                    <rect x="25" y="68" width="6" height="25" fill="rgba(101,67,33,0.8)"/>
                    <rect x="149" y="68" width="6" height="25" fill="rgba(101,67,33,0.8)"/>
                    {/* Books */}
                    <rect x="30" y="50" width="4" height="12" fill="rgba(200,100,50,0.8)"/>
                    <rect x="35" y="48" width="4" height="14" fill="rgba(150,75,25,0.8)"/>
                    <rect x="40" y="52" width="4" height="10" fill="rgba(180,90,40,0.8)"/>
                    {/* Vase */}
                    <ellipse cx="120" cy="58" rx="8" ry="4" fill="rgba(60,60,60,0.8)"/>
                    <rect x="116" y="45" width="8" height="13" fill="rgba(80,80,80,0.8)" rx="4"/>
                    {/* Chair */}
                    <rect x="140" y="45" width="15" height="20" fill="rgba(101,67,33,0.6)" rx="2"/>
                    <rect x="142" y="25" width="11" height="20" fill="rgba(139,69,19,0.6)" rx="1"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-white text-xl font-semibold drop-shadow-md">Piñateria</h3>
            </div>
          </div>
        </div>

        {/* Art & Collectibles - Right Side (spans 2 rows) */}
        <div className="row-span-2 relative rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105 bg-gradient-to-br from-purple-600 via-blue-600 to-blue-500">
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="flex justify-center items-center flex-1">
              {/* Geometric circles design */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Large circle */}
                <div className="absolute top-8 right-8 w-32 h-32 rounded-full border-4 border-white/20 bg-white/5"></div>
                {/* Medium circle with red accent */}
                <div className="absolute bottom-16 left-8 w-20 h-20 rounded-full bg-red-500/60 backdrop-blur-sm border-2 border-white/30"></div>
                {/* Small circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm"></div>
                {/* Accent lines */}
                <div className="absolute top-1/3 left-1/4 w-16 h-0.5 bg-white/30 transform rotate-45"></div>
                <div className="absolute bottom-1/3 right-1/4 w-12 h-0.5 bg-white/25 transform -rotate-12"></div>
              </div>
            </div>
            <h3 className="text-white text-xl font-semibold drop-shadow-md">Ofertas</h3>
          </div>
        </div>

        {/* Clothing & Shoes - Bottom Left (duplicate) */}
        <div className="relative rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105 bg-gradient-to-br from-green-400 via-green-300 to-lime-300">
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="flex justify-center items-center flex-1">
              {/* Nike Shoe Illustration */}
              <div className="relative">
                <svg width="200" height="120" viewBox="0 0 200 120" className="drop-shadow-lg">
                  {/* Shoe sole */}
                  <ellipse cx="100" cy="100" rx="90" ry="15" fill="rgba(255,255,255,0.3)"/>
                  {/* Shoe body */}
                  <path d="M20 80 Q30 60 60 55 L140 55 Q160 60 170 75 Q165 85 140 90 L60 90 Q30 85 20 80" fill="rgba(135,206,235,0.9)"/>
                  {/* Nike swoosh */}
                  <path d="M40 75 Q80 70 120 75 Q100 80 40 78" fill="rgba(255,255,255,0.8)"/>
                  {/* Laces */}
                  <circle cx="70" cy="65" r="2" fill="white"/>
                  <circle cx="85" cy="63" r="2" fill="white"/>
                  <circle cx="100" cy="63" r="2" fill="white"/>
                  <circle cx="115" cy="65" r="2" fill="white"/>
                  {/* Lace strings */}
                  <path d="M70 65 Q77 60 85 63 Q92 58 100 63 Q107 58 115 65" stroke="white" strokeWidth="1" fill="none"/>
                </svg>
              </div>
            </div>
            <h3 className="text-white text-xl font-semibold drop-shadow-md">Juguetería</h3>
          </div>
        </div>

        {/* Home & Living - Bottom Center (duplicate) */}
        <div className="relative rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105">
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='homeGrad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23654321'/%3E%3Cstop offset='100%25' style='stop-color:%232F1B14'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23homeGrad2)'/%3E%3C/svg%3E"
            alt="Home background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-amber-900/30 to-gray-800/70">
            <div className="p-6 flex flex-col justify-between h-full">
              <div className="flex justify-center items-center flex-1">
                {/* Home scene illustration */}
                <div className="relative">
                  <svg width="180" height="100" viewBox="0 0 180 100" className="drop-shadow-lg">
                    {/* Table */}
                    <rect x="20" y="60" width="140" height="8" fill="rgba(139,69,19,0.8)" rx="4"/>
                    <rect x="25" y="68" width="6" height="25" fill="rgba(101,67,33,0.8)"/>
                    <rect x="149" y="68" width="6" height="25" fill="rgba(101,67,33,0.8)"/>
                    {/* Books */}
                    <rect x="30" y="50" width="4" height="12" fill="rgba(200,100,50,0.8)"/>
                    <rect x="35" y="48" width="4" height="14" fill="rgba(150,75,25,0.8)"/>
                    <rect x="40" y="52" width="4" height="10" fill="rgba(180,90,40,0.8)"/>
                    {/* Vase */}
                    <ellipse cx="120" cy="58" rx="8" ry="4" fill="rgba(60,60,60,0.8)"/>
                    <rect x="116" y="45" width="8" height="13" fill="rgba(80,80,80,0.8)" rx="4"/>
                    {/* Chair */}
                    <rect x="140" y="45" width="15" height="20" fill="rgba(101,67,33,0.6)" rx="2"/>
                    <rect x="142" y="25" width="11" height="20" fill="rgba(139,69,19,0.6)" rx="1"/>
                  </svg>
                </div>
              </div>
          <h3 className="text-white text-xl font-semibold drop-shadow-md">Termos & Mugs</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesComponent;