"use client";

import React from "react";
import Image from "next/image";
import logo from "../app/cositaslogo.png";
import { Facebook, Twitter, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 mb-10">
      {/* Header message */}
      <div className="text-center mb-12 bg-gray-500 py-4 ">
        <p className="text-white">
          Cositas pa' Sumerce funciona con electricidad 100% renovable.
        </p>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Image
              src={logo}
              alt="Cositas pa sumercé logo"
              width={200}
              height={40}
            />

            {/* Social Icons */}
            <div className="flex space-x-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
              >
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">Tienda</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Tarjetas de regalo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Mapa del sitio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Iniciar sesión
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Crear cuenta
                </a>
              </li>
            </ul>
          </div>

          {/* Sell Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">Vender</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Vender
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Equipos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Foros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Afiliados
                </a>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">Sobre nosotros</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Cositas pa Sumercé
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Politicas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Inversores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Empleo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Prensa
                </a>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">Ayuda</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Centro de ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Confianza y seguridad{" "}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Politicas de privacidad{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 text-gray-600 text-sm mb-4 sm:mb-0">
              <p>© 2025 Cositas pa' Sumercé.</p>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Politicas de privacidad
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Términos de uso
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Cookies
              </a>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="text-sm">Volver arriba</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
