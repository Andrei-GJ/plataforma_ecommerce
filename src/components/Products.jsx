'use client';

import React, { useState } from "react";
import { Heart, ChevronDown, ChevronRight, ShoppingCart } from "lucide-react";

const MiscellaneousStoreInterface = () => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    brands: true,
    location: true,
    condition: true,
  });

  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    brands: [],
    locations: [],
    conditions: [],
  });

  const [priceRange, setPriceRange] = useState([5, 200]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const products = [
    {
      id: 1,
      name: "Detergente Líquido Ariel",
      brand: "Ariel",
      price: 45.0,
      category: "Limpieza",
      image: "/api/placeholder/300/400",
      bgColor: "bg-blue-100",
    },
    {
      id: 2,
      name: "Papel Higiénico Suave",
      brand: "Scott",
      price: 28.0,
      category: "Hogar",
      image: "/api/placeholder/300/400",
      bgColor: "bg-white",
    },
    {
      id: 3,
      name: "Galletas Oreo Original",
      brand: "Nabisco",
      price: 35.0,
      category: "Snacks",
      image: "/api/placeholder/300/400",
      bgColor: "bg-purple-100",
    },
    {
      id: 4,
      name: "Shampoo Herbal Essences",
      brand: "Herbal Essences",
      price: 52.0,
      category: "Cuidado Personal",
      image: "/api/placeholder/300/400",
      bgColor: "bg-green-100",
    },
    {
      id: 5,
      name: "Refresco Coca Cola 600ml",
      brand: "Coca Cola",
      price: 18.0,
      category: "Bebidas",
      image: "/api/placeholder/300/400",
      bgColor: "bg-red-100",
    },
    {
      id: 6,
      name: "Pasta de Dientes Colgate",
      brand: "Colgate",
      price: 25.0,
      category: "Cuidado Personal",
      image: "/api/placeholder/300/400",
      bgColor: "bg-blue-50",
    },
    {
      id: 7,
      name: "Pilas AA Duracell",
      brand: "Duracell",
      price: 65.0,
      category: "Electrónicos",
      image: "/api/placeholder/300/400",
      bgColor: "bg-yellow-100",
    },
    {
      id: 8,
      name: "Aceite de Cocina Capullo",
      brand: "Capullo",
      price: 42.0,
      category: "Despensa",
      image: "/api/placeholder/300/400",
      bgColor: "bg-yellow-50",
    },
    {
      id: 9,
      name: "Jabón de Tocador Dove",
      brand: "Dove",
      price: 15.0,
      category: "Cuidado Personal",
      image: "/api/placeholder/300/400",
      bgColor: "bg-pink-50",
    },
    {
      id: 10,
      name: "Cuaderno Universitario",
      brand: "Norma",
      price: 12.0,
      category: "Papelería",
      image: "/api/placeholder/300/400",
      bgColor: "bg-orange-100",
    },
    {
      id: 11,
      name: "Cereal Zucaritas Kellogg's",
      brand: "Kellogg's",
      price: 68.0,
      category: "Desayuno",
      image: "/api/placeholder/300/400",
      bgColor: "bg-orange-200",
    },
    {
      id: 12,
      name: "Desodorante Rexona",
      brand: "Rexona",
      price: 38.0,
      category: "Cuidado Personal",
      image: "/api/placeholder/300/400",
      bgColor: "bg-gray-100",
    },
  ];

  const FilterSection = ({ title, isExpanded, onToggle, children }) => (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="font-medium text-gray-900">{title}</span>
        {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      {isExpanded && <div className="mt-3">{children}</div>}
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 text-blue-800">Filtros</h2>

        {/* Categories */}
        <FilterSection
          title="Categorías"
          isExpanded={expandedSections.categories}
          onToggle={() => toggleSection("categories")}
        >
          <div className="space-y-2">
            {[
              "Limpieza",
              "Cuidado Personal",
              "Despensa",
              "Bebidas",
              "Snacks",
              "Hogar",
              "Papelería",
              "Electrónicos",
              "Desayuno",
              "Medicamentos",
            ].map((category) => (
              <div key={category} className="flex items-center">
                <input type="checkbox" className="mr-2 text-blue-600" />
                <span className="text-sm text-gray-700">{category}</span>
              </div>
            ))}
          </div>
        </FilterSection>

        {/* Price */}
        <FilterSection
          title="Precio"
          isExpanded={expandedSections.price}
          onToggle={() => toggleSection("price")}
        >
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="5"
                max="200"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([parseInt(e.target.value), priceRange[1]])
                }
                className="flex-1 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
              <input
                type="range"
                min="5"
                max="200"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
                className="flex-1 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </FilterSection>

        {/* Brands */}
        <FilterSection
          title="Marcas"
          isExpanded={expandedSections.brands}
          onToggle={() => toggleSection("brands")}
        >
          <div className="space-y-2">
            {[
              "Coca Cola",
              "Colgate",
              "Dove",
              "Ariel",
              "Scott",
              "Nabisco",
              "Kellogg's",
              "Duracell",
              "Rexona",
              "Herbal Essences",
            ].map((brand) => (
              <div key={brand} className="flex items-center">
                <input type="checkbox" className="mr-2 text-blue-600" />
                <span className="text-sm text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </FilterSection>

        {/* Location in Store */}
        <FilterSection
          title="Ubicación en Tienda"
          isExpanded={expandedSections.location}
          onToggle={() => toggleSection("location")}
        >
          <div className="space-y-2">
            {[
              "Entrada",
              "Pasillo 1",
              "Pasillo 2",
              "Refrigerados",
              "Caja",
              "Farmacia",
              "Mostrador",
            ].map((location) => (
              <div key={location} className="flex items-center">
                <input type="checkbox" className="mr-2 text-blue-600" />
                <span className="text-sm text-gray-700">{location}</span>
              </div>
            ))}
          </div>
        </FilterSection>

        {/* Condition */}
        <FilterSection
          title="Estado"
          isExpanded={expandedSections.condition}
          onToggle={() => toggleSection("condition")}
        >
          <div className="space-y-2">
            {[
              "Nuevo",
              "Oferta",
              "Próximo a vencer",
              "Producto estrella",
              "Limitado",
            ].map((condition) => (
              <div key={condition} className="flex items-center">
                <input type="checkbox" className="mr-2 text-blue-600" />
                <span className="text-sm text-gray-700">{condition}</span>
              </div>
            ))}
          </div>
        </FilterSection>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1 rounded-full border">
              Más Vendidos
            </button>
            <button className="text-sm text-blue-600 hover:text-blue-800 px-3 py-1 rounded-full bg-blue-100">
              Ofertas
            </button>
            <button className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1 rounded-full border">
              Precio: Menor a Mayor
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow border"
            >
              <div
                className={`relative ${product.bgColor} h-56 flex items-center justify-center`}
              >
                <button className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-sm hover:shadow-md">
                  <Heart
                    size={16}
                    className="text-gray-400 hover:text-red-500"
                  />
                </button>
                <div className="w-28 h-28 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-xs text-center">
                    Imagen
                    <br />
                    Producto
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                  {product.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{product.brand}</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-green-600">
                    ${product.price.toFixed(2)}
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiscellaneousStoreInterface;
