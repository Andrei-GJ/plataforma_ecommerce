'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';

export default function FloatingLogin({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Modal flotante */}
      <div className="fixed inset-0 z-50 overflow-auto bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
        <div 
          className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-screen overflow-auto"
          style={{ 
            maxWidth: '900px',
            minHeight: '500px',
            animation: 'modalSlideIn 0.3s ease-out'
          }}
        >
          {/* Botón de cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>

          <div className="flex min-h-[500px]">
            {/* Lado izquierdo - Imagen */}
            <div className="hidden md:flex md:w-1/2 relative rounded-l-2xl overflow-hidden">
              {/* Imagen de fondo */}
              <img 
                src="/images/cositas1.jpg"
                alt="Cositas"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Lado derecho - Formulario */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8">
              <div className="w-full max-w-sm">
                <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Iniciar sesión</h1>
                
                <div className="space-y-4">
                  {/* Botón de Google */}
                  <button
                    type="button"
                    className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-3" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continuar con Google
                  </button>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">O</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none rounded-full relative block w-full px-4 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm"
                      placeholder=""
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Contraseña
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="appearance-none rounded-full relative block w-full px-4 py-2.5 pr-12 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm"
                        placeholder=""
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                    <div className="text-right mt-1">
                      <a href="/recover" className="text-sm text-gray-600 hover:text-gray-900">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Iniciar sesión
                    </button>
                  </div>

                  {/* Sign up */}
                  <div className="text-center pt-2">
                    <span className="text-sm text-gray-600">
                      ¿Aún no tienes una cuenta?{' '}
                      <a href="/register" className="font-medium text-blue-700 hover:text-blue-500">
                        Créala
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
}