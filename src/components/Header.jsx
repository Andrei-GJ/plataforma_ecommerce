"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../app/cositaslogo.png";
import React, { use, useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, User, ShoppingBag } from "lucide-react";
import FloatingLogin from "./Login";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const onOpenLogin = () => setShowLogin(true);
  const onCloseLogin = () => setShowLogin(false);

  // Categorías para el dropdown
  const categories = [
    { name: "Papelería", route: "/clothing-shoes" },
    { name: "Piñateria", route: "/home-living" },
    { name: "Juguetería", route: "/wedding-party" },
    { name: "Termos & Mugs", route: "/art-collectibles" },
    { name: "Ofertas", route: "/craft-supplies" },
    { name: "Cuidado Personal", route: "/electronics" },
    { name: "Libros", route: "/books-media" },
    { name: "Deporte & recreación", route: "/sports-recreation" },
  ];

  // Items de navegación principal
  const navigationItems = [
    { name: "Papelería", route: "/clothing-shoes" },
    { name: "Piñateria", route: "/home-living" },
    { name: "Juguetería", route: "/wedding-party" },
    { name: "Termos & Mugs", route: "/art-collectibles" },
    { name: "Ofertas", route: "/craft-supplies" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <header className="bg-amber-200 py-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div>
                <Image
                  src={logo}
                  alt="Cositas pa sumercé logo"
                  width={200}
                  height={40}
                />
              </div>
            </Link>
          </div>

          {/* Center section - Categories and Search */}
          <div className="flex items-center flex-1 max-w-xl mx-8">
            {/* Categories dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 bg-gray-100 px-5 py-2.5 rounded-l-full border border-white hover:bg-gray-50 transition-all duration-200 shadow-sm min-w-[130px] justify-center"
              >
                <span className="text-gray-600 font-medium text-sm">
                  Categorías
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="py-2">
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        href={category.route}
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-sm"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar producto"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2.5 pr-12 rounded-r-full border border-white focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent bg-white shadow-sm text-sm placeholder-gray-500"
                />
                <Link href="/products">
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full p-1.5 hover:bg-gray-200 transition-colors duration-200"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </form>
          </div>

          {/* Right section - User actions */}
          <div className="flex items-center space-x-4">
            {/* Account */}
            <button
              onClick={onOpenLogin}
              className="bg-blue-700 hover:bg-blue-900 text-white font-medium py-2.5 px-6 rounded-full shadow-lg hover:shadow-xl"
            >
              Iniciar sesión
            </button>

            {/* Modal de login */}
            <FloatingLogin isOpen={showLogin} onClose={onCloseLogin} />

            {/* Cart */}
            <Link
              href="/cart"
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 relative"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {/* Cart count badge */}
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  0
                </span>
              </div>
              <span className="font-medium text-sm">Carrito</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <div className="bg-amber-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-center space-x-12">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.route}
                className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 text-sm whitespace-nowrap py-2 px-3 rounded-full hover:bg-white/70"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay para cerrar dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
