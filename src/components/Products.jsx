"use client";

import React, { useState, useEffect } from "react";
import { Heart, ChevronDown, ChevronRight, ShoppingCart } from "lucide-react";
import { useSearchParams } from "next/navigation";

const MiscellaneousStoreInterface = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const category_id = searchParams.get("category_id");

  const [expandedSections, setExpandedSections] = useState({
    categories: false,
    price: false,
    brands: false,
    location: false,
    condition: false,
  });

  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    brands: [],
    locations: [],
    conditions: [],
  });

  const categoryNames = {
    1: "Papelería",
    2: "Piñatería",
    3: "Juguetería",
    4: "Termos & Mugs",
    5: "Cuidado Personal",
    6: "Libros",
    7: "Deporte & Recreación",
  };

  const categoryColors = {
    1: "bg-yellow-100 text-yellow-800",
    2: "bg-pink-100 text-pink-800",
    3: "bg-green-100 text-green-800",
    4: "bg-purple-100 text-purple-800",
    5: "bg-red-100 text-red-800",
    6: "bg-blue-100 text-blue-800",
    7: "bg-indigo-100 text-indigo-800",
  };

  const [priceRange, setPriceRange] = useState([5, 200]);
  const [products, setProducts] = useState([]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://back-ecomerce-vz7f.onrender.com/all_products"
        );
        if (!response.ok) throw new Error("Error al obtener los productos");
        const data = await response.json();

        // Verifica si data es un arreglo o tiene una propiedad tipo arreglo
        const productList = Array.isArray(data)
          ? data
          : Array.isArray(data.products)
          ? data.products
          : [];

        setProducts(productList);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
        <h2 className="text-xl font-semibold text-blue-800">Filtros</h2>

        {/* Categories */}
        <FilterSection
          title="Categorías"
          className="text-xl font-bold text-blue-800"
          isExpanded={expandedSections.categories}
          onToggle={() => toggleSection("categories")}
        >
          <div className="space-y-2">
            {[
              "Papelería",
              "Piñateria",
              "Juguetería",
              "Termos & Mugs",
              "Cuidado Personal",
              "Libros",
              "Deporte & Recreación",
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
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.isArray(products) &&
            products.map((product) => (
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
                  <div
                    className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs ${
                      categoryColors[product.category_id] ||
                      "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {" "}
                    {categoryNames[product.category_id] || "Sin categoría"}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold capitalize text-gray-900 text-sm">
                    {product.name_product}{" "}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-blue-600">
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
