"use client";

import React, { useState, useEffect } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import FloatingRegisterModal from "./Register";
import { useRouter } from "next/navigation";

export default function FloatingLogin({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://back-ecomerce-vz7f.onrender.com/all_users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
      });
  }, []);

  const onOpenRegister = () => setShowRegister(true);
  const onCloseRegister = () => setShowRegister(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userExists = users.find((user) => user.email === email);

    if (!userExists) {
      alert("El usuario no tiene una cuenta registrada.");
      return;
    }

    try {
      const response = await fetch(
        "https://back-ecomerce-vz7f.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        alert("Credenciales incorrectas. Intenta de nuevo.");
        return;
      }

      const data = await response.json();

      localStorage.setItem("email", userExists.email);
      localStorage.setItem("userId", userExists.id.toString());

      alert("Inicio de sesión exitoso ✅");

      if (userExists.email === "admin@cositas.com") {
        router.push("/dashboardadmin");
      } else {
        router.push("/profile");
      }

      // ✅ Cerrar modal al iniciar sesión
      onClose();
    } catch (error) {
      console.error("Error en el login:", error);
      alert("Error al iniciar sesión.");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-auto bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
        <div
          className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-screen overflow-auto"
          style={{
            animation: "modalSlideIn 0.3s ease-out",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>

          <div className="flex min-h-[500px]">
            <div className="hidden md:flex md:w-1/2 relative rounded-l-2xl overflow-hidden">
              <img
                src="/images/cositas1.jpg"
                alt="Cositas"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center p-8">
              <div className="w-full max-w-sm">
                <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Iniciar sesión
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="cositas@gmail.com"
                      className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-full focus:border-blue-500 focus:outline-none focus:ring-0 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Contraseña
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Contraseña"
                        className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-full focus:border-blue-500 focus:outline-none focus:ring-0 focus:bg-white transition-colors"
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
                      <a
                        href="/recover"
                        className="text-sm text-gray-600 hover:text-gray-900"
                      >
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Iniciar sesión
                    </button>
                  </div>

                  <div className="text-center pt-2">
                    <span className="text-sm text-gray-600">
                      ¿Aún no tienes una cuenta?{" "}
                      <button
                        onClick={onOpenRegister}
                        type="button"
                        className="text-blue-700 font-medium rounded-full hover:underline cursor-pointer"
                      >
                        Regístrate
                      </button>
                    </span>
                  </div>
                </form>

                <FloatingRegisterModal
                  isOpen={showRegister}
                  onClose={onCloseRegister}
                />
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
