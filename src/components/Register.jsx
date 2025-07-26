"use client";

import React, { useState, useEffect } from "react";
import { Eye, EyeOff, X, Check, AlertTriangle } from "lucide-react";

export default function FloatingRegisterModal({
  isOpen,
  onClose,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    surname: "",
    document_type_id: "",
    document_number: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(true);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(true);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  // Función para mostrar notificaciones
  const showNotification = (type, title, message, duration = 5000) => {
    const id = Date.now();
    setNotification({ id, type, title, message });

    setTimeout(() => {
      setNotification(null);
    }, duration);
  };

  // Tipos de documento comunes en Colombia
const documentTypes = [
  { id: "1", name: "Tarjeta de identidad" },
  { id: "2", name: "Cédula de ciudadania" },
  { id: "5", name: "Cédula de extranjeria" },
  { id: "6", name: "NIT" },
  { id: "7", name: "Pasaporte" },
];

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "El correo electrónico es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Este correo no es válido";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es requerida";
    } else if (formData.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
    }

    if (!formData.first_name.trim()) {
      newErrors.first_name = "El nombre es requerido";
    }

    if (!formData.surname.trim()) {
      newErrors.surname = "El apellido es requerido";
    }

    if (!formData.document_type_id) {
      newErrors.document_type_id = "Seleccione un tipo de documento";
    }

    if (!formData.document_number.trim()) {
      newErrors.document_number = "El número de documento es requerido";
    }

    if (!acceptTerms) {
      newErrors.terms = "Debe aceptar las condiciones de uso";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const response = await fetch(
        "https://back-ecomerce-vz7f.onrender.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            first_name: formData.first_name,
            surname: formData.surname,
            document_type_id: formData.document_type_id,
            document_number: formData.document_number,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Registro exitoso
        console.log("Usuario registrado exitosamente:", data);

        showNotification(
          "success",
          "¡Registro Exitoso!",
          `Bienvenido ${formData.first_name}! Tu cuenta ha sido creada.`
        );

        // Cerrar modal después de un pequeño delay para que se vea la notificación
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        // Error de la API
        if (data.errors) {
          // Si la API devuelve errores específicos por campo
          setErrors(data.errors);
          showNotification(
            "error",
            "Error en el Registro",
            "Por favor, corrige los errores en el formulario."
          );
        } else {
          // Error general
          const errorMessage = data.message || "Error al registrar usuario";
          setErrors({ general: errorMessage });
          showNotification("error", "Error en el Registro", errorMessage);
        }
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      const connectionError =
        "Error de conexión. Por favor, intenta nuevamente.";
      setErrors({ general: connectionError });
      showNotification(
        "error",
        "Error de Conexión",
        "No se pudo conectar al servidor. Verifica tu conexión a internet."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  const notificationStyles = `
    .slide-in-right {
      animation: slideInFromRight 0.5s ease-out;
    }
    
    .progress-bar {
      animation: progressBar 5s linear forwards;
    }
    
    .modal-slide-in {
      animation: modalSlideIn 0.3s ease-out;
    }
    
    @keyframes slideInFromRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes progressBar {
      from {
        width: 100%;
      }
      to {
        width: 0%;
      }
    }
    
    @keyframes modalSlideIn {
      from {
        transform: translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: notificationStyles }} />

      {/* Componente de Notificación Push */}
      {notification && (
        <div className="fixed top-4 right-4 z-[60] max-w-sm w-full">
          <div
            className={`
              slide-in-right relative overflow-hidden rounded-xl shadow-2xl backdrop-blur-sm border
              transform transition-all duration-500 ease-out
              ${
                notification.type === "success"
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 border-green-400"
                  : "bg-gradient-to-r from-red-500 to-rose-600 border-red-400"
              }
            `}
          >
            {/* Barra de progreso */}
            <div className="progress-bar absolute top-0 left-0 h-1 bg-white bg-opacity-30" />

            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {notification.type === "success" ? (
                    <Check className="h-6 w-6 text-white" />
                  ) : (
                    <AlertTriangle className="h-6 w-6 text-white" />
                  )}
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-semibold text-white">
                    {notification.title}
                  </p>
                  <p className="mt-1 text-sm text-white text-opacity-90">
                    {notification.message}
                  </p>
                </div>
                <button
                  onClick={() => setNotification(null)}
                  className="ml-4 flex-shrink-0 text-white hover:text-gray-200 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Efectos de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform skew-x-12 -translate-x-full animate-pulse" />
          </div>
        </div>
      )}

      <div className="modal-slide-in fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in fade-in duration-300">
          <div className="flex h-full max-h-[700px]">
            {/* Imagen lateral */}
            <div className="hidden md:flex md:w-1/2 relative rounded-l-2xl overflow-hidden">
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
                    Regístrese gratis para acceder y comprar productos únicos.
                  </p>
                </div>
              </div>

              {/* Contenido del formulario */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Error general */}
                {errors.general && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">{errors.general}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nombre y Apellido en una fila */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-gray-700 mb-2 text-left"
                      >
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        value={formData.first_name}
                        onChange={(e) =>
                          handleInputChange("first_name", e.target.value)
                        }
                        className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-full focus:border-blue-500 focus:outline-none focus:ring-0 focus:bg-white transition-colors"
                        placeholder="Tu nombre"
                      />
                      {errors.first_name && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.first_name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="surname"
                        className="block text-sm font-medium text-gray-700 mb-2 text-left"
                      >
                        Apellido *
                      </label>
                      <input
                        type="text"
                        id="surname"
                        value={formData.surname}
                        onChange={(e) =>
                          handleInputChange("surname", e.target.value)
                        }
                        className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-full focus:border-blue-500 focus:outline-none focus:ring-0 focus:bg-white transition-colors"
                        placeholder="Tu apellido"
                      />
                      {errors.surname && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.surname}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Campo de correo electrónico */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2 text-left"
                    >
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-full focus:border-blue-500 focus:outline-none focus:ring-0 focus:bg-white transition-colors"
                      placeholder="cositas@gmail.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Tipo de documento y número */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="document_type_id"
                        className="block text-sm font-medium text-gray-700 mb-2 text-left"
                      >
                        Tipo de documento *
                      </label>
                      <select
                        id="document_type_id"
                        value={formData.document_type_id}
                        onChange={(e) =>
                          handleInputChange("document_type_id", e.target.value)
                        }
                        className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-full focus:border-blue-500 focus:outline-none focus:ring-0 focus:bg-white transition-colors"
                      >
                        <option value="">Seleccionar...</option>
                        {documentTypes.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.name}
                          </option>
                        ))}
                      </select>
                      {errors.document_type_id && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.document_type_id}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="document_number"
                        className="block text-sm font-medium text-gray-700 mb-2 text-left"
                      >
                        Número de documento *
                      </label>
                      <input
                        type="text"
                        id="document_number"
                        value={formData.document_number}
                        onChange={(e) =>
                          handleInputChange("document_number", e.target.value)
                        }
                        className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-full focus:border-blue-500 focus:outline-none focus:ring-0 focus:bg-white transition-colors"
                        placeholder="123456789"
                      />
                      {errors.document_number && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.document_number}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Campo de contraseña */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm font-medium text-gray-700"
                      >
                        Contraseña *
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
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-full focus:border-blue-500 focus:outline-none focus:ring-0 focus:bg-white transition-colors"
                      placeholder="Contraseña"
                    />
                    {errors.password && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.password}
                      </p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">
                      Utilice 8 o más caracteres con una mezcla de letras,
                      números y símbolos
                    </p>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
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
                    {errors.terms && (
                      <p className="text-xs text-red-500 ml-7">
                        {errors.terms}
                      </p>
                    )}

                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={subscribeNewsletter}
                        onChange={(e) =>
                          setSubscribeNewsletter(e.target.checked)
                        }
                        className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-3 text-sm text-gray-700">
                        Suscríbase a nuestro boletín mensual
                      </span>
                    </label>
                  </div>

                  {/* Botón de registro */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-full font-medium hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Registrando...
                      </>
                    ) : (
                      "Registrarme"
                    )}
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
