'use client';

import React, { useState } from 'react';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      console.log('Email suscrito:', email);
      // Aquí puedes agregar la lógica para enviar el email
      alert('¡Gracias por suscribirte!');
      setEmail('');
    }
  };

  return (
    <div className="bg-blue-700 px-8 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-white text-xl md:text-2xl font-normal leading-relaxed mb-10 px-4">
          Envíeme ofertas exclusivas, ideas para regalos únicos
          <br />
          y consejos personalizados de como comprar.
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
              className="w-full px-6 py-4 rounded-l-full sm:rounded-r-none rounded-r-full text-gray-600 placeholder-gray-400 border-0 focus:outline-none text-base bg-white"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-r-full sm:rounded-l-none rounded-l-full transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Suscribirme
            <span className="text-base">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}