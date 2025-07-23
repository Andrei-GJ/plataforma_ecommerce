"use client";

import React from "react";
import Image from "next/image";
import logo from "../app/cositaslogo.png";
import { Facebook, Twitter, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 mb-10">
      {/* Header message */}
      <div className="text-center mb-12 bg-gray-400 py-4 ">
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
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-black rounded-md flex items-center justify-center text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 11v5" />
                  <path d="M8 8v.01" />
                  <path d="M12 16v-5" />
                  <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                  <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-violet-800 rounded-md flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M16.5 7.5v.01" />
                </svg>
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
            <h4 className="font-semibold text-gray-900 mb-4">Vendedor</h4>
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
