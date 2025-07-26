"use client";

import React, { useState, useEffect } from "react";
import { Heart, ChevronDown, ChevronRight, ShoppingCart } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";

const MiscellaneousStoreInterface = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([1000, 1000000]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const category_id = searchParams.get("category_id");
  
  const { addToCart } = useCart();

  // Función para generar imagen placeholder basada en el producto
  const getProductImage = (product) => {
    const productName = product.name_product.toLowerCase();
    const size = "300x200";
    
    // Detectar tipo de producto y asignar imagen apropiada
    if (productName.includes('cuaderno') || productName.includes('papel') || productName.includes('lápiz') || productName.includes('borrador') || productName.includes('colores') || productName.includes('regla') || productName.includes('carpeta') || productName.includes('tajalápiz')) {
      return `https://via.placeholder.com/${size}/FCD34D/FFFFFF?text=📚+${encodeURIComponent(product.name_product.slice(0, 10))}`;
    } else if (productName.includes('piñata') || productName.includes('sorpresa') || productName.includes('confeti') || productName.includes('globos') || productName.includes('serpentina') || productName.includes('velas') || productName.includes('adornos')) {
      return `https://via.placeholder.com/${size}/EC4899/FFFFFF?text=🎉+${encodeURIComponent(product.name_product.slice(0, 10))}`;
    } else if (productName.includes('muñeca') || productName.includes('carro') || productName.includes('juego') || productName.includes('bloques') || productName.includes('pelota') || productName.includes('rompecabezas') || productName.includes('figuras')) {
      return `https://via.placeholder.com/${size}/10B981/FFFFFF?text=🧸+${encodeURIComponent(product.name_product.slice(0, 10))}`;
    } else if (productName.includes('termo') || productName.includes('acero') || productName.includes('infantil') || productName.includes('diseño') || productName.includes('mini') || productName.includes('deportivo') || productName.includes('vidrio')) {
      return `https://via.placeholder.com/${size}/3B82F6/FFFFFF?text=🍴+${encodeURIComponent(product.name_product.slice(0, 10))}`;
    } else {
      return `https://via.placeholder.com/${size}/6B7280/FFFFFF?text=📦+${encodeURIComponent(product.name_product.slice(0, 10))}`;
    }
  };

  const handleAddToCart = (product) => {
    const cartItem = {
      id: product.id,
      name: product.name_product,
      price: product.price,
      category: categories.find((c) => c.id === product.category_id)?.name || "Sin categoría",
      image: getProductImage(product)
    };
    addToCart(cartItem);
  };

  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryFilter = (id) => {
    const current = new URLSearchParams(window.location.search);
    const currentId = current.get("category_id");

    if (currentId === id.toString()) {
      current.delete("category_id");
    } else {
      current.set("category_id", id);
    }

    router.push(`?${current.toString()}`);
  };

  const categoryColorClasses = {
    1: "bg-yellow-100 text-yellow-800",
    2: "bg-pink-100 text-pink-800",
    3: "bg-green-100 text-green-800",
    4: "bg-purple-100 text-purple-800",
    5: "bg-red-100 text-red-800",
    6: "bg-blue-100 text-blue-800",
    7: "bg-indigo-100 text-indigo-800",
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://back-ecomerce-vz7f.onrender.com/categories");
        const data = await response.json();
        setCategories(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error al cargar categorías", err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let response;
        if (category_id) {
          response = await fetch(
            `https://back-ecomerce-vz7f.onrender.com/product_by_category/${category_id}`
          );
        } else {
          response = await fetch("https://back-ecomerce-vz7f.onrender.com/all_products");
        }

        if (!response.ok) throw new Error("Error al obtener los productos");
        const data = await response.json();

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
  }, [category_id]);

  // 💡 Filtrar por estado activo y precio
  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.isactive === true &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    );
    setFilteredProducts(filtered);
  }, [products, priceRange]);

  const FilterSection = ({ title, isExpanded, onToggle, children }) => (
    <div className="border-b border-gray-200 py-4">
      <button onClick={onToggle} className="flex items-center justify-between w-full text-left">
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

        {/* Categorías */}
        <FilterSection
          title="Categorías"
          isExpanded={expandedSections.categories}
          onToggle={() => toggleSection("categories")}
        >
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2 text-blue-600"
                  checked={category_id === category.id.toString()}
                  onChange={() => handleCategoryFilter(category.id)}
                />
                <span
                  className="text-sm text-gray-700"
                  onClick={() => handleCategoryFilter(category.id)}
                >
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </FilterSection>

        {/* Precio */}
        <FilterSection
          title="Precio"
          isExpanded={expandedSections.price}
          onToggle={() => toggleSection("price")}
        >
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="1000"
                max="1000000"
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
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {loading ? (
          <p className="text-gray-500">Cargando productos...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : filteredProducts.length === 0 ? (
          <p className="text-gray-600">No hay productos para mostrar.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow border"
              >
                <div className="relative bg-gray-100 h-56 overflow-hidden">
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-sm hover:shadow-md z-10">
                    <Heart size={16} className="text-gray-400 hover:text-red-500" />
                  </button>
                  
                  {/* Imagen del producto */}
                  <img 
                    src={getProductImage(product)}
                    alt={product.name_product}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback si la imagen no carga
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback emoji cuando la imagen no carga */}
                  <div className="w-full h-full bg-gradient-to-br from-amber-50 to-amber-100 items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-2 bg-amber-200 rounded-full flex items-center justify-center">
                        <span className="text-2xl">
                          {product.category_id === 1 ? "📚" : 
                           product.category_id === 2 ? "🎉" : 
                           product.category_id === 3 ? "🧸" : 
                           product.category_id === 4 ? "🍴" : "📦"}
                        </span>
                      </div>
                      <span className="text-xs text-amber-700 font-medium">
                        {categories.find((c) => c.id === product.category_id)?.name || "Producto"}
                      </span>
                    </div>
                  </div>
                  
                  <div
                    className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${
                      categoryColorClasses[product.category_id] ||
                      "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {categories.find((c) => c.id === product.category_id)?.name || "Categoría"}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className=" text-md font-medium capitalize text-gray-900">
                    {product.name_product}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-md font-bold text-amber-600 tracking-wide">
                      ${product.price.toFixed(0)}
                    </p>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition-colors hover:scale-105 transform shadow-md"
                      title="Agregar al carrito"
                    >
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MiscellaneousStoreInterface;
