"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../app/cositaslogo.png";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Search, ShoppingBag } from "lucide-react";
import FloatingLogin from "./Login";

import {
  FileText,
  Sparkles,
  Gamepad2,
  Coffee,
  Heart,
  BookOpen,
  Trophy,
} from "lucide-react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  const router = useRouter();

  const onOpenLogin = () => setShowLogin(true);
  const onCloseLogin = () => setShowLogin(false);

  // Obtener el usuario desde el backend usando user_id guardado en localStorage
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      fetch(`https://back-ecomerce-vz7f.onrender.com/user/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.first_name) {
            setUser(data);
          }
        })
        .catch((err) => {
          console.error("Error al obtener usuario:", err);
        });
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/products?search=${searchTerm}`);
  };

  const goToCategoryById = (categoryId) => {
    setIsDropdownOpen(false);
    router.push(`/products?category_id=${categoryId}`);
  };

  const handleUserClick = () => {
    if (user && user.first_name) {
      router.push("/profile");
    } else {
      onOpenLogin();
    }
  };

  const categories = [
    { id: 1, name: "Papelería", icon: FileText },
    { id: 2, name: "Piñatería", icon: Sparkles },
    { id: 3, name: "Juguetería", icon: Gamepad2 },
    { id: 4, name: "Termos", icon: Coffee },
    { id: 5, name: "Cuidado Personal", icon: Heart },
    { id: 6, name: "Libros", icon: BookOpen },
    { id: 7, name: "Deporte", icon: Trophy },
  ];

  const navigationItems = [
    { id: 1, name: "Papelería" },
    { id: 2, name: "Piñatería" },
    { id: 3, name: "Juguetería" },
    { id: 4, name: "Termos" },
    { id: 5, name: "Cuidado Personal" },
  ];

  return (
    <header className="bg-amber-200 py-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Cositas pa sumercé" width={200} height={40} />
          </Link>

          <div className="flex items-center flex-1 max-w-xl mx-8">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 bg-gray-100 px-5 py-2.5 rounded-l-full border border-white hover:bg-gray-50 transition-all duration-200 shadow-sm min-w-[130px] justify-center"
              >
                <span className="text-gray-600 font-medium text-sm">Categorías</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="py-2">
                    {categories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <button
                          key={category.id}
                          onClick={() => goToCategoryById(category.id)}
                          className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 text-sm flex items-center gap-3"
                        >
                          <IconComponent size={18} className="text-gray-500" />
                          <span>{category.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSearch} className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar producto"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2.5 pr-12 rounded-r-full border border-white bg-white shadow-sm text-sm placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-0"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full p-1.5 hover:bg-gray-200"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <button
                  onClick={handleUserClick}
                  className="bg-blue-700 hover:bg-blue-900 text-white font-medium py-2.5 px-6 rounded-full shadow-lg"
                >
                  Hola, {user.first_name}
                </button>
              </>
            ) : (
              <button
                onClick={handleUserClick}
                className="bg-blue-700 hover:bg-blue-900 text-white font-medium py-2.5 px-6 rounded-full shadow-lg"
              >
                Iniciar sesión
              </button>
            )}

            <FloatingLogin isOpen={showLogin} onClose={onCloseLogin} />

            <Link href="/cart" className="flex items-center space-x-2 text-gray-700 relative">
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  0
                </span>
              </div>
              <span className="font-medium text-sm">Carrito</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-amber-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-center space-x-12">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goToCategoryById(item.id)}
                className="text-gray-700 hover:text-gray-900 font-medium text-sm py-2 px-3 rounded-full hover:bg-white/70"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {isDropdownOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
      )}
    </header>
  );
};

export default Header;
