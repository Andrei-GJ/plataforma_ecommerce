import React from "react";
import Image from "next/image";

const CategoriesComponent = () => {
  return (
    <div className="max-w-300 mx-auto mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-8">Categorias</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-5">
        {/* Clothing & Shoes - Top Left */}
        <div className="relative rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105 bg-gradient-to-br from-green-400 via-green-300 to-lime-300">
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <Image
              src="/images/papeleria.jpg"
              alt="Papeleria"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 p-6 flex items-end justify-end">
              <h3 className="text-black text-xl font-bold">
                Papelería
              </h3>
            </div>
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
              <Image
                src="/images/piñateria.jpg"
                alt="Piñateria"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 p-6 flex items-end justify-end">
                <h3 className="text-black text-xl font-bold">
                  Piñatería
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Art & Collectibles - Right Side (spans 2 rows) */}
        <div className="row-span-2 relative rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105 bg-gradient-to-br from-purple-600 via-blue-600 to-blue-500">
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <Image
              src="/images/ofertas.jpg"
              alt="Papeleria"
              fill
              className="object-cover"
            />
            <div className="absolute flex items-end justify-end">
              <h3 className="text-white text-xl font-bold">
                Ofertas
              </h3>
            </div>
          </div>
        </div>

        {/* Clothing & Shoes - Bottom Left (duplicate) */}
        <div className="relative rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105 bg-gradient-to-br from-green-400 via-green-300 to-lime-300">
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <Image
              src="/images/jugueteria.jpg"
              alt="Jugueteria"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 p-6 flex items-end justify-end">
              <h3 className="text-black text-xl font-bold">
                Juguetería
              </h3>
            </div>
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
              <Image
                src="/images/termos.jpeg"
                alt="Termos"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 p-6 flex items-end justify-end">
                <h3 className="text-black text-xl font-bold">
                  Termos & Mugs
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesComponent;
