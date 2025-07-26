"use client";

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, X, Plus, Minus, Trash2, Mail } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category?: string;
  image?: string;
}

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartItemsCount } = useCart();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [orderStatus, setOrderStatus] = useState<string>('');

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP'
    }).format(price);
  };

  const handleCheckout = async (): Promise<void> => {
    if (!customerEmail || !customerName || !customerPhone) {
      alert('Por favor completa todos los campos');
      return;
    }

    if (items.length === 0) {
      alert('El carrito está vacío');
      return;
    }

    setIsCheckingOut(true);
    setOrderStatus('📤 Procesando pedido y enviando correo electrónico...');

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
        const result = await response.json();
        setOrderStatus('✅ ¡Correo enviado exitosamente! Tu pedido ha sido procesado y recibirás una confirmación por email.');
        clearCart();
        setCustomerEmail('');
        setCustomerName('');
        setCustomerPhone('');
        setTimeout(() => {
          setIsOpen(false);
          setOrderStatus('');
        }, 4000);
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        throw new Error(errorData.message || 'Error al enviar el pedido');
      }
    } catch (error) {
      console.error('Error:', error);
      setOrderStatus('❌ Error al enviar el pedido. Inténtalo de nuevo.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <>
      {/* Botón del carrito */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 bg-amber-500 text-white p-4 rounded-full shadow-xl hover:bg-amber-600 transition-all duration-200 hover:scale-105"
      >
        <ShoppingCart className="w-7 h-7" />
        {getCartItemsCount() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full w-7 h-7 flex items-center justify-center font-bold shadow-lg">
            {getCartItemsCount()}
          </span>
        )}
      </button>

      {/* Modal del carrito */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-amber-100 bg-opacity-30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-lg bg-white shadow-2xl flex flex-col border-l border-amber-200">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b bg-amber-50 border-amber-200">
                <h2 className="text-xl font-semibold text-gray-800">🛒 Carrito de Compras</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-amber-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Contenido del carrito */}
              <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                {items.length === 0 ? (
                  <div className="text-center text-gray-500 mt-12">
                    <div className="bg-amber-100 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                      <ShoppingCart className="w-16 h-16 text-amber-500" />
                    </div>
                    <p className="text-xl font-medium text-gray-700">Tu carrito está vacío</p>
                    <p className="text-sm mt-2 text-gray-500">Agrega productos para comenzar tu compra</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item: CartItem) => (
                      <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-3 flex-1 pr-3">
                            {/* Imagen del producto en el carrito */}
                            <div className="w-16 h-16 bg-amber-100 rounded-lg flex-shrink-0 overflow-hidden">
                              {item.image ? (
                                <img 
                                  src={item.image} 
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    if (target.nextSibling) {
                                      (target.nextSibling as HTMLElement).style.display = 'flex';
                                    }
                                  }}
                                />
                              ) : null}
                              <div className="w-full h-full bg-amber-200 flex items-center justify-center text-lg" style={{ display: item.image ? 'none' : 'flex' }}>
                                🛍️
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-800 text-base">{item.name}</h3>
                              <p className="text-amber-600 font-bold text-lg">{formatPrice(item.price)}</p>
                              <p className="text-xs text-gray-500">{item.category}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200 hover:border-amber-300"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4 text-gray-600" />
                            </button>
                            <span className="px-4 py-2 bg-amber-50 rounded-lg font-semibold min-w-[50px] text-center text-amber-800">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200 hover:border-amber-300"
                            >
                              <Plus className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                          <p className="font-bold text-lg text-gray-800">
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
                <div className="border-t bg-white p-6 shadow-lg border-amber-200">
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-amber-100">
                    <span className="text-xl font-semibold text-gray-800">Total:</span>
                    <span className="text-3xl font-bold text-amber-600 bg-amber-50 px-4 py-2 rounded-lg border border-amber-200">
                      {formatPrice(getCartTotal())}
                    </span>
                  </div>

                  {/* Formulario de checkout */}
                  <div className="space-y-5 mb-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                      <p className="text-sm text-blue-700">
                        📧 <strong>Tu pedido será enviado por correo electrónico</strong>
                      </p>
                      <p className="text-xs text-blue-600 mt-1">
                        Recibirás una confirmación en tu email y nosotros procesaremos tu orden
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        👤 Nombre completo
                      </label>
                      <input
                        type="text"
                        placeholder="Tu nombre completo"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="text-[black] w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        📧 Correo electrónico
                      </label>
                      <input
                        type="email"
                        placeholder="tu@email.com"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="text-[black] w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        📱 Teléfono
                      </label>
                      <input
                        type="tel"
                        placeholder="310 123 4567"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="text-[black] w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Estado del pedido con animaciones mejoradas */}
                  {orderStatus && (
                    <div className={`p-5 rounded-xl mb-6 text-center font-medium border-2 transition-all duration-300 ${
                      orderStatus.includes('exitosamente') || orderStatus.includes('Correo enviado')
                        ? 'bg-green-50 text-green-800 border-green-300 shadow-lg transform scale-105'
                        : orderStatus.includes('Error')
                        ? 'bg-red-50 text-red-800 border-red-300 shadow-lg'
                        : 'bg-blue-50 text-blue-800 border-blue-300 shadow-md'
                    }`}>
                      <div className="flex items-center justify-center space-x-3">
                        {orderStatus.includes('exitosamente') || orderStatus.includes('Correo enviado') ? (
                          <span className="text-2xl animate-bounce">✅</span>
                        ) : orderStatus.includes('Error') ? (
                          <span className="text-2xl">❌</span>
                        ) : (
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                        )}
                        <span className="text-base font-semibold">{orderStatus}</span>
                      </div>
                      {(orderStatus.includes('exitosamente') || orderStatus.includes('Correo enviado')) && (
                        <div className="mt-3 text-sm text-green-700">
                          🎉 ¡Tu pedido ha sido enviado correctamente!
                        </div>
                      )}
                    </div>
                  )}

                  <div className="space-y-3">
                    <button
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                      className="w-full bg-amber-500 text-white py-4 rounded-lg hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    >
                      <Mail className="w-6 h-6" />
                      <span>{isCheckingOut ? '📤 Enviando correo electrónico...' : '📧 Enviar Pedido por Email'}</span>
                    </button>
                    
                    <button
                      onClick={clearCart}
                      className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 font-medium transition-colors border border-gray-200"
                    >
                      🗑️ Vaciar Carrito
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
