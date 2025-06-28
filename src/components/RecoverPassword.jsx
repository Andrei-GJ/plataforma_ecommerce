"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PasswordRecovery() {
  const [email, setEmail] = useState("focus001@gmail.com");
  const [error, setError] = useState(
    "No podemos encontrar su correo electrónico."
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    setIsSubmitting(true);
    setError("");

    setTimeout(() => {
      if (!email || !email.includes("@")) {
        setError("No podemos encontrar su correo electrónico.");
      } else {
        setError("");
        alert("¡Enlace de recuperación enviado!");
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Imagen lateral */}
      <div className="w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Tres mujeres jóvenes con gafas de sol sonriendo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Formulario */}
      <div className="w-1/2 flex items-center justify-center px-16">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Recupera tu contraseña
          </h1>

          <p className="text-gray-600 mb-1 leading-relaxed">
            Introduce tu correo electrónico y te enviaremos un enlace
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            para restablecer tu contraseña
          </p>

          <p className="text-sm text-gray-500 mb-8">Por favor, compruébalo.</p>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Correo electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:border-purple-500 transition-colors"
              />
              {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-6 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 disabled:opacity-50 transition-all duration-200"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2 animate-spin"></div>
                  Enviando...
                </div>
              ) : (
                "Enviar"
              )}
            </button>

            <div className="text-left mt-6">
              <button
                className="text-purple-600 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
                onClick={() => router.push("/login")}
              >
                Volver a iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
