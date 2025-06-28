'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginComponent() {
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

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-500 relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative flex items-center justify-center w-full p-12">
          {/* Placeholder for the three women image */}
          <div className="relative">
            <div className="flex space-x-4 items-center">
              {/* Woman 1 */}
              <div className="w-32 h-40 bg-gradient-to-b from-amber-200 to-amber-300 rounded-lg flex items-center justify-center shadow-xl transform -rotate-3">
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-400 rounded-full mx-auto mb-2"></div>
                  <div className="w-16 h-20 bg-blue-200 rounded-lg mx-auto"></div>
                </div>
              </div>
              
              {/* Woman 2 */}
              <div className="w-32 h-40 bg-gradient-to-b from-pink-200 to-pink-300 rounded-lg flex items-center justify-center shadow-xl transform rotate-2 z-10">
                <div className="text-center">
                  <div className="w-8 h-8 bg-orange-400 rounded-full mx-auto mb-2"></div>
                  <div className="w-16 h-20 bg-white rounded-lg mx-auto"></div>
                </div>
              </div>
              
              {/* Woman 3 */}
              <div className="w-32 h-40 bg-gradient-to-b from-blue-300 to-blue-400 rounded-lg flex items-center justify-center shadow-xl transform -rotate-1">
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-2"></div>
                  <div className="w-16 h-20 bg-blue-300 rounded-lg mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Iniciar sesión</h1>
          
          <div className="space-y-6">
            {/* Continue with Google button */}
            <button
              type="button"
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
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
                <span className="px-2 bg-gray-50 text-gray-500">OR</span>
              </div>
            </div>

            {/* Email input */}
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
                className="appearance-none rounded-full relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder=""
              />
            </div>

            {/* Password input */}
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
                  className="appearance-none rounded-full relative block w-full px-4 py-3 pr-12 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                  placeholder=""
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              <div className="text-right mt-2">
                <a href="/recover" className="text-sm text-gray-600 hover:text-gray-900">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Iniciar sesión
              </button>
            </div>

            {/* Sign up link */}
            <div className="text-center">
              <span className="text-sm text-gray-600">
                ¿Aún no tienes una cuenta?{' '}
                <a href="/register" className="font-medium text-purple-600 hover:text-purple-500">
                  Creala
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}