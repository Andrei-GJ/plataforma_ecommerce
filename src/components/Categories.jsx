"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Papelería",
    image: "/images/papeleria.jpg",
    gradient: "bg-gradient-to-br from-green-400 via-green-300 to-lime-300",
    span: "",
  },
  {
    id: 2,
    name: "Piñatería",
    image: "/images/piñateria.jpg",
    gradient: "bg-gradient-to-br from-gray-900/50 via-amber-900/30 to-gray-800/70",
    span: "",
  },
  {
    id: 5,
    name: "Cuidado Personal",
    image: "/images/cuidado.jpg",
    gradient: "bg-gradient-to-br from-purple-600 via-blue-600 to-blue-500",
    span: "row-span-2",
  },
  {
    id: 3,
    name: "Juguetería",
    image: "/images/jugueteria.jpg",
    gradient: "bg-gradient-to-br from-green-400 via-green-300 to-lime-300",
    span: "",
  },
  {
    id: 4,
    name: "Termos",
    image: "/images/termos.jpeg",
    gradient: "bg-gradient-to-br from-gray-900/50 via-amber-900/30 to-gray-800/70",
    span: "",
  },
];

const CategoriesComponent = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8 px-10">
      <h2 className="text-xl font-bold text-gray-800 mb-8">Categorías</h2>

      <div className="grid grid-cols-3 gap-5 auto-rows-[250px]">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products?category_id=${category.id}`}
            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105 ${category.gradient} ${category.span}`}
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 p-6 flex items-end justify-end">
              <h3 className="text-white text-xl font-bold drop-shadow">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesComponent;
