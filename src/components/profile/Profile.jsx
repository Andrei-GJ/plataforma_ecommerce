"use client";

import React, { useState, useEffect } from "react";
import { User, Heart, Info, LogOut, Edit2, Trash2, Plus } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerProfile = () => {
  const [addresses, setAddresses] = useState([]);
  const [activeTab, setActiveTab] = useState("info");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) return;

      try {
        const response = await fetch(
          `https://back-ecomerce-vz7f.onrender.com/user/${userId}`
        );
        if (!response.ok) throw new Error("Error al obtener usuario");

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
      }
    };

    fetchUser();
  }, []);

  const handleAddAddress = () => {
    const newAddress = {
      id: addresses.length + 1,
      name: "Nueva Dirección",
      phone: "000000000",
      address: "Dirección nueva por configurar",
      type: "Home",
      isDefault: false,
      isBilling: false,
    };
    setAddresses([...addresses, newAddress]);
  };

  const handleRemoveAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  const handleSetDefault = (id) => {
    setAddresses(
      addresses.map((address) => ({
        ...address,
        isDefault: address.id === id,
      }))
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    window.location.href = "/"; // Redirige al home
  };

  const documentTypes = [
    { id: "1", name: "TI" },
    { id: "2", name: "CC" },
    { id: "5", name: "CE" },
    { id: "6", name: "NIT" },
    { id: "7", name: "PTE" },
  ];

  const getDocumentTypeName = (id) => {
    const doc = documentTypes.find((d) => d.id === String(id));
    return doc ? doc.name : "Desconocido";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800 mb-1">
            {userData ? `Hola, ${userData.first_name} 💛` : "Cargando..."}
          </h1>
          <p className="text-sm text-gray-500">Bienvenido a tu cuenta</p>
        </div>

        <nav className="mt-6">
          <div className="px-6 space-y-1">
            {[
              {
                key: "orders",
                icon: <Info className="mr-3 h-4 w-4" />,
                label: "Mis ordenes",
              },
              {
                key: "wishlist",
                icon: <Heart className="mr-3 h-4 w-4" />,
                label: "Lista de deseos",
              },
              {
                key: "info",
                icon: <User className="mr-3 h-4 w-4" />,
                label: "Perfil",
              },
              {
                key: "signout",
                icon: <LogOut className="mr-3 h-4 w-4" />,
                label: "Cerrar sesión",
              },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.key
                    ? "bg-blue-50 text-blue-700 border-l-4 border-blue-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {activeTab === "info" && (
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Perfil</h2>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Detalles de contacto
              </h3>
              {userData ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Nombre</p>
                      <p className="text-gray-900">
                        {userData.first_name} {userData.surname}
                      </p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer">
                      Cambiar
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Correo electrónico
                      </p>
                      <p className="text-gray-900">{userData.email}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer">
                      Cambiar
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Documento de identidad
                      </p>
                      <p className="text-gray-900">
                        {getDocumentTypeName(userData.documenttype)} -{" "}
                        {userData.documentnumber}
                      </p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer">
                      Cambiar
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Contraseña</p>
                      <p className="text-gray-900">••••••••</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer">
                      Cambiar
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">Cargando datos...</p>
              )}
            </div>
          </div>
        )}
        {activeTab === "orders" && (
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Mis ordenes
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-500 text-center py-8">No hay ordenes.</p>
            </div>
          </div>
        )}
        {activeTab === "wishlist" && (
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Lista de deseos
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-500 text-center py-8">
                Lista de deseos vacia.
              </p>
            </div>
          </div>
        )}

        {activeTab === "signout" &&
          (() => {
            toast.success("Sesión cerrada correctamente");

            setTimeout(() => {
              localStorage.removeItem("user_id");
              window.location.href = "/";
            }, 2000); // Espera 2 segundos para que el toast se muestre

            return null;
          })()}
      </div>
    </div>
  );
};

export default CustomerProfile;
