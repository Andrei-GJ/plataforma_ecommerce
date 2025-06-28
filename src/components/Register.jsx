'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function RegisterComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('designer@gmail.com');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(true);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(true);
  const [emailError, setEmailError] = useState('Este correo no es válido');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registro enviado:', { email, password, acceptTerms, subscribeNewsletter });
  };

  return (
    <div className="min-h-screen flex">
      {/* Imagen lateral */}
      <div className="flex-1 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-500"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="flex space-x-4">
                      {/* Simulación de las tres chicas con gafas */}
                      <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                        <div className="w-6 h-3 bg-orange-400 rounded-full"></div>
                      </div>
                      <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                        <div className="w-6 h-3 bg-blue-400 rounded-full"></div>
                      </div>
                      <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                        <div className="w-6 h-3 bg-cyan-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">¡Únete a nuestra comunidad!</h2>
              <p className="text-lg opacity-90">Descubre nuevas tendencias y conecta con otros usuarios</p>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario de registro */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Registrarme</h1>
            <p className="text-gray-600">Regístrese gratis para acceder a cualquiera de nuestros productos</p>
          </div>

          {/* Botón de Google */}
          <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg mb-6 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-gray-700 font-medium">Continuar con Google</span>
          </button>

          <div className="space-y-2">
            {/* Campo de correo electrónico */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                Correo electrónico
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-4 text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-full focus:border-purple-500 focus:outline-none focus:ring-0 focus:bg-white transition-colors"
                  placeholder="designer@gmail.com"
                />
              </div>
              {emailError && (
                <p className="mt-2 text-sm text-red-500">{emailError}</p>
              )}
            </div>

            {/* Campo de contraseña */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
                >
                  {showPassword ? <EyeOff size={16} className="mr-1" /> : <Eye size={16} className="mr-1" />}
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-4 text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-full focus:border-purple-500 focus:outline-none focus:ring-0 focus:bg-white transition-colors"
                  placeholder="Contraseña"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Utilice 8 o más caracteres con una mezcla de letras, números y símbolos
              </p>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <span className="ml-3 text-sm text-gray-700">
                  Acepta nuestras{' '}
                  <a href="#" className="text-purple-600 underline hover:text-purple-800">
                    Condiciones de uso
                  </a>{' '}
                  y{' '}
                  <a href="#" className="text-purple-600 underline hover:text-purple-800">
                    Política de privacidad
                  </a>
                </span>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={subscribeNewsletter}
                  onChange={(e) => setSubscribeNewsletter(e.target.checked)}
                  className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
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
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Registrarme
            </button>

            {/* Link de inicio de sesión */}
            <p className="text-center text-sm text-gray-600">
              ¿Ya tienes una cuenta?{' '}
              <a href="/login" className="text-purple-600 hover:text-purple-800 font-medium">
                Inicia sesión
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}