"use client";

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, X, Plus, Minus, Trash2, Mail } from 'lucide-react';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartItemsCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderStatus, setOrderStatus] = useState('');

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP'
    }).format(price);
  };

  const handleCheckout = async () => {
    if (!customerEmail || !customerName || !customerPhone) {
      alert('Por favor completa todos los campos');
      return;
    }

    if (items.length === 0) {
      alert('El carrito está vacío');
      return;
    }

    setIsCheckingOut(true);
    setOrderStatus('Procesando pedido...');

    try {
      const orderData = {
        customerName,
        customerEmail,
        customerPhone,
        items,
        total: getCartTotal(),
        orderDate: new Date().toLocaleString('es-CO')
      };

      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        setOrderStatus('¡Pedido enviado exitosamente!');
        clearCart();
        setCustomerEmail('');
        setCustomerName('');
        setCustomerPhone('');
        setTimeout(() => {
          setIsOpen(false);
          setOrderStatus('');
        }, 2000);
      } else {
        throw new Error('Error al enviar el pedido');
      }
    } catch (error) {
      console.error('Error:', error);
      setOrderStatus('Error al enviar el pedido. Inténtalo de nuevo.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <>
      {/* Botón del carrito */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <ShoppingCart className="w-6 h-6" />
        {getCartItemsCount() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
            {getCartItemsCount()}
          </span>
        )}
      </button>

      {/* Modal del carrito */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Carrito de Compras</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Contenido del carrito */}
              <div className="flex-1 overflow-y-auto p-4">
                {items.length === 0 ? (
                  <div className="text-center text-gray-500 mt-8">
                    <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p>Tu carrito está vacío</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium text-sm">{item.name}</h3>
                            <p className="text-blue-600 font-semibold">{formatPrice(item.price)}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 ml-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-100 rounded"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-3 py-1 bg-gray-100 rounded">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-100 rounded"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="font-semibold">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer con total y checkout */}
              {items.length > 0 && (
                <div className="border-t p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-xl font-bold text-blue-600">
                      {formatPrice(getCartTotal())}
                    </span>
                  </div>

                  {/* Formulario de checkout */}
                  <div className="space-y-3 mb-4">
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Correo electrónico"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {orderStatus && (
                    <div className={`p-3 rounded-lg mb-3 text-center ${
                      orderStatus.includes('exitosamente') 
                        ? 'bg-green-100 text-green-800'
                        : orderStatus.includes('Error')
                        ? 'bg-red-100 text-red-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {orderStatus}
                    </div>
                  )}

                  <div className="space-y-2">
                    <button
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      <Mail className="w-5 h-5" />
                      <span>{isCheckingOut ? 'Enviando...' : 'Realizar Pedido'}</span>
                    </button>
                    
                    <button
                      onClick={clearCart}
                      className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
                    >
                      Vaciar Carrito
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
