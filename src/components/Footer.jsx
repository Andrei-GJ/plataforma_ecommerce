"use client";

import React from "react";
import Image from "next/image";
import logo from "../app/cositaslogo.png";
import { Facebook, Twitter, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
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
            <h4 className="font-semibold text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Gift cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Site map
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Polka blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Sign in
                </a>
              </li>
            </ul>
          </div>

          {/* Sell Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">Sell</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Sell on Polka
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Teams
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Forums
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Affiliates
                </a>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">About</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Polka, Inc.
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">Help</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Trust and safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Privacy settings
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
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 transition-colors"
              >
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
