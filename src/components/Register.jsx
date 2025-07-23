"use client";

import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";

export default function FloatingRegisterModal({
  isOpen,
  onClose,
  onSwitchToLogin,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(true);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(true);
  const [emailError, setEmailError] = useState("Este correo no es válido");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registro enviado:", {
      email,
      password,
      acceptTerms,
      subscribeNewsletter,
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{
            animation: "modalSlideIn 0.3s ease-out",
          }}
    >
      <div className=" rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in fade-in duration-300">
        <div className="flex h-full max-h-[600px]">
          {/* Imagen lateral */}
          <div className="hidden md:flex md:w-1/2 relative rounded-l-2xl overflow-hidden">
            {/* Imagen de fondo */}
            <img
              src="/images/cositas2.jpg"
              alt="Cositas"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Formulario de registro */}
          <div className="relative flex-1 bg-white flex flex-col">
            {/* Header con botón de cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h1 className="text-2xl pb-3 font-bold text-gray-900">
                  Registrarme
                </h1>
                <p className="text-sm text-gray-600">
                  Regístrese gratis para acceder a cualquiera de nuestros
                  productos
                </p>
              </div>
            </div>

            {/* Contenido del formulario */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {/* Botón de Google */}
                <button
                  type="button"
                  className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium">
                    Continuar con Google
                  </span>
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">O</span>
                  </div>
                </div>

                {/* Campo de correo electrónico */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2 text-left"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-full focus:border-blue-500 focus:outline-none focus:ring-0 focus:bg-white transition-colors"
                    placeholder="cositas@gmail.com"
                  />
                  {emailError && (
                    <p className="mt-1 text-xs text-red-500">{emailError}</p>
                  )}
                </div>

                {/* Campo de contraseña */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700"
                    >
                      Contraseña
                    </label>
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="text-xs text-gray-500 hover:text-gray-700 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff size={14} className="mr-1" />
                      ) : (
                        <Eye size={14} className="mr-1" />
                      )}
                      {showPassword ? "Ocultar" : "Mostrar"}
                    </button>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-full focus:border-blue-500 focus:outline-none focus:ring-0 focus:bg-white transition-colors"
                    placeholder="Contraseña"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Utilice 8 o más caracteres con una mezcla de letras, números
                    y símbolos
                  </p>
                </div>

                {/* Checkboxes */}
                <div className="space-y-3">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded  focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700 text-left">
                      Acepta nuestras{" "}
                      <a
                        href="#"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        Condiciones de uso
                      </a>{" "}
                      y{" "}
                      <a
                        href="#"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        Política de privacidad
                      </a>
                    </span>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={subscribeNewsletter}
                      onChange={(e) => setSubscribeNewsletter(e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      Suscríbase a nuestro boletín mensual
                    </span>
                  </label>
                </div>

                {/* Botón de registro */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-full font-medium hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Registrarme
                </button>

                {/* Link de inicio de sesión */}
                <p className="text-center text-sm text-gray-600">
                  ¿Ya tienes una cuenta?{" "}
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline cursor-pointer"
                  >
                    Inicia sesión
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
