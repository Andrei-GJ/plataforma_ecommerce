"use client";

import React, { useState, useEffect } from "react";
import {
  Home,
  ChevronDown,
  ChevronRight,
  User,
  Power,
  Store,
  Package,
  Users,
  Tag,
  Plus,
  List,
  Truck,
  Settings,
  Grid,
  AlertCircle,
} from "lucide-react";
import { Edit, Trash2 } from "lucide-react";
import Image from "next/image";

// Componente Sidebar (tu código original)
const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  currentRoute,
  expandedSections,
  setExpandedSections,
  onRouteChange,
  onLogout,
}) => {
  const toggleSection = (sectionName) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const handleRouteChange = (route) => {
    onRouteChange(route);
    setSidebarOpen(false);
  };

  const SidebarItem = ({ icon, text, active, onClick }) => (
    <button
      onClick={onClick}
      className={`
        group flex items-center w-full px-2 py-2 text-sm font-medium rounded-md transition-colors
        ${
          active
            ? "bg-yellow-100 text-yellow-900 border-r-2 border-yellow-500"
            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        }
      `}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {text}
    </button>
  );

  const CollapsibleSection = ({ title, children, isExpanded, onToggle }) => (
    <div className="mt-4">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
      >
        <span>{title}</span>
        {isExpanded ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>
      {isExpanded && <div className="mt-2 ml-4 space-y-1">{children}</div>}
    </div>
  );

  return (
    <div
      className={`
      fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
      lg:translate-x-0 lg:static lg:inset-0
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    `}
    >
      <div className="flex items-center justify-center h-16 bg-gradient-to-r bg-yellow-200">
        <div className="text-gray-800 font-bold text-lg">
          <Image
            src="/images/cositaslogo.png"
            alt="Cositas pa Sumercé"
            width={100}
            height={48}
            className="h-12 w-auto"
          />
        </div>
      </div>

      <nav className="mt-5 px-2">
        <div className="space-y-1">
          <SidebarItem
            icon={<Home className="w-5 h-5" />}
            text="Inicio"
            active={currentRoute === "home"}
            onClick={() => handleRouteChange("home")}
          />

          <CollapsibleSection
            title="Categorías"
            isExpanded={expandedSections.categorias}
            onToggle={() => toggleSection("categorias")}
          >
            <SidebarItem
              text="Listar"
              active={currentRoute === "categorias/listar"}
              onClick={() => handleRouteChange("categorias/listar")}
            />
            <SidebarItem
              text="Crear"
              active={currentRoute === "categorias/crear"}
              onClick={() => handleRouteChange("categorias/crear")}
            />
            <SidebarItem
              text="Administrar"
              active={currentRoute === "categorias/admin"}
              onClick={() => handleRouteChange("categorias/admin")}
            />
          </CollapsibleSection>

          <CollapsibleSection
            title="Proveedores"
            isExpanded={expandedSections.proveedores}
            onToggle={() => toggleSection("proveedores")}
          >
            <SidebarItem
              text="Listar"
              active={currentRoute === "proveedores/listar"}
              onClick={() => handleRouteChange("proveedores/listar")}
            />
            <SidebarItem
              text="Crear"
              active={currentRoute === "proveedores/crear"}
              onClick={() => handleRouteChange("proveedores/crear")}
            />
            <SidebarItem
              text="Administrar"
              active={currentRoute === "proveedores/admin"}
              onClick={() => handleRouteChange("proveedores/admin")}
            />
          </CollapsibleSection>

          <CollapsibleSection
            title="Productos"
            isExpanded={expandedSections.productos}
            onToggle={() => toggleSection("productos")}
          >
            <SidebarItem
              text="Listar"
              active={currentRoute === "productos/listar"}
              onClick={() => handleRouteChange("productos/listar")}
            />
            <SidebarItem
              text="Crear"
              active={currentRoute === "productos/crear"}
              onClick={() => handleRouteChange("productos/crear")}
            />
            <SidebarItem
              text="Cards"
              active={currentRoute === "productos/cards"}
              onClick={() => handleRouteChange("productos/cards")}
            />
            <SidebarItem
              text="Administrar"
              active={currentRoute === "productos/admin"}
              onClick={() => handleRouteChange("productos/admin")}
            />
          </CollapsibleSection>
        </div>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-gray-200">
        <div className="space-y-2">
          <button
            className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md transition-colors"
            onClick={() => handleRouteChange("/")}
          >
            <Store className="w-5 h-5 mr-3" />
            Volver a la tienda
          </button>
          <button
            className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
            onClick={() => handleRouteChange("profile")}
          >
            <User className="w-5 h-5 mr-3" />
            Perfil
          </button>
          <button
            onClick={onLogout}
            className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors"
          >
            <Power className="w-5 h-5 mr-3" />
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => (
  <div className="p-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Package className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Productos</h2>
              <p className="text-sm text-gray-600">Gestiona tu inventario</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Tag className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Categorías
              </h2>
              <p className="text-sm text-gray-600">Organiza tus productos</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Proveedores
              </h2>
              <p className="text-sm text-gray-600">Administra proveedores</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Componentes de Categorías
const CategoriasListar = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState(new Set());

  // Función para obtener categorías de la API
  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://back-ecomerce-vz7f.onrender.com/get_products_category"
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setCategories(data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };

  // Cargar categorías al montar el componente
  useEffect(() => {
    fetchCategories();
  }, []);

  // Función para obtener el nombre de la categoría
  const getCategoryDisplayName = (categoryId, categoryName) => {
    if (categoryName) return categoryName;

    const defaultCategory = {
      1: "Papelería",
      2: "Piñatería",
      3: "Juguetería",
      4: "Termos & Mugs",
      5: "Cuidado Personal",
      6: "Libros",
      7: "Deporte & Recreación",
    };

    return defaultCategory[categoryId] || `Categoría ${categoryId}`;
  };

  // Función para formatear el precio
  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(price);
  };

  // Función para alternar expansión de categoría
  const toggleCategory = (categoryId) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  // Contar productos activos
  const getActiveProductsCount = (products) => {
    return products.filter((product) => product.isactive).length;
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={fetchCategories}
          disabled={loading}
          className="bg-gray-500 hover:bg-gray-700 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded transition-colors flex items-center"
        >
          <div
            className={`w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full ${
              loading ? "animate-spin" : ""
            }`}
          ></div>
          Actualizar
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
          <Plus className="w-4 h-4 inline mr-2" />
          Nueva Categoría
        </button>
      </div>

      {/* Estado de error */}
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
            <div>
              <h3 className="text-sm font-medium text-red-800">
                Error al cargar categorías
              </h3>
              <p className="text-sm text-red-700 mt-1">{error}</p>
            </div>
          </div>
          <button
            onClick={fetchCategories}
            className="mt-3 bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded text-sm transition-colors"
          >
            Reintentar
          </button>
        </div>
      )}

      {/* Estado de carga */}
      {loading && (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-6 py-12 text-center">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-500">Cargando categorías...</p>
          </div>
        </div>
      )}

      {/* Lista de categorías */}
      {!loading && !error && (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {categories.map((category) => {
              const isExpanded = expandedCategories.has(category.category_id);
              const activeProductsCount = getActiveProductsCount(
                category.products
              );

              return (
                <li
                  key={category.category_id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center flex-1">
                        <button
                          onClick={() => toggleCategory(category.category_id)}
                          className="mr-2 p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          {isExpanded ? (
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-gray-500" />
                          )}
                        </button>
                        <Tag className="w-5 h-5 text-blue-500 mr-3" />
                        <div className="flex-1">
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-900">
                              {getCategoryDisplayName(
                                category.category_id,
                                category.category_name
                              )}
                            </span>
                            <span className="ml-2 text-xs text-gray-500">
                              (ID: {category.category_id})
                            </span>
                          </div>
                          <div className="flex items-center mt-1 text-xs text-gray-500">
                            <Package className="w-3 h-3 mr-1" />
                            <span>
                              {category.products.length} productos total
                              {activeProductsCount > 0 && (
                                <span className="text-green-600 ml-2">
                                  • {activeProductsCount} activos
                                </span>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="flex whitespace-nowrap justify-center text-center text-sm font-medium">
                          <button className="flex gap-1 text-indigo-600 hover:text-indigo-900 mr-3 p-1 rounded hover:bg-indigo-50 transition-colors">
                            <Edit className="w-4 h-4" />
                            <span>Editar</span>
                          </button>
                          <button className="flex gap-1 text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50 transition-colors">
                            <Trash2 className="w-4 h-4" />
                            <span>Eliminar</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Lista de productos expandible */}
                    {isExpanded && category.products.length > 0 && (
                      <div className="mt-4 ml-8 border-l-2 border-gray-200 pl-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          Productos:
                        </h4>
                        <div className="space-y-2">
                          {category.products.map((product) => (
                            <div
                              key={product.id}
                              className="flex items-center justify-between bg-gray-50 rounded p-3"
                            >
                              <div className="flex items-center">
                                <Package className="w-4 h-4 text-gray-400 mr-2" />
                                <div>
                                  <span className="text-sm font-medium text-gray-900 capitalize">
                                    {product.name_product}
                                  </span>
                                  <div className="flex items-center mt-1 space-x-3">
                                    <span className="text-sm text-gray-600">
                                      {formatPrice(product.price)}
                                    </span>
                                    <span
                                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                        product.isactive
                                          ? "bg-green-100 text-green-800"
                                          : "bg-red-100 text-red-800"
                                      }`}
                                    >
                                      {product.isactive ? "Activo" : "Inactivo"}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                      Proveedor: {product.provider_id}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {categories.length === 0 && !loading && !error && (
            <div className="text-center py-12">
              <Tag className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <div className="text-gray-500">
                <p className="text-lg font-medium">
                  No hay categorías registradas
                </p>
                <p className="mt-1">Comienza creando tu primera categoría</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const CategoryCreate = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("El nombre de la categoría es requerido.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(
        "https://back-ecomerce-vz7f.onrender.com/create_product_category",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name_category: name }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      setSuccess("Categoría creada exitosamente.");
      setName(""); // limpiar campo
    } catch (err) {
      console.error(err);
      setError("Error al crear la categoría.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white shadow rounded-lg p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="sm:col-span-2">
              <label className="block text-lg font-bold text-gray-700">
                Nombre de la categoría <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-3 p-2 pl-5 block text-black w-full border border-gray-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          {/* Mensajes */}
          {success && <p className="text-green-600 text-sm">{success}</p>}
          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setName("")}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-full"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full"
            >
              {loading ? "Creando..." : "Crear categoría"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CategoriasAdmin = () => (
  <div className="p-6">
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">
          Configuración de Categorías
        </h2>
        <Settings className="w-5 h-5 text-gray-400" />
      </div>
      <p className="text-gray-600">
        Configuraciones avanzadas para la gestión de categorías.
      </p>
    </div>
  </div>
);

// Componentes de Proveedores
const ProveedoresListar = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener proveedores
  const fetchProviders = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://back-ecomerce-vz7f.onrender.com/all_provider"
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      // 🔐 Verifica que la respuesta sea un array
      if (!Array.isArray(data)) {
        throw new Error("La respuesta de proveedores no es un arreglo.");
      }

      setProviders(data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching providers:", err);
      setProviders([]); // fallback a array vacío
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={fetchProviders}
          disabled={loading}
          className="bg-gray-500 hover:bg-gray-700 disabled:bg-gray-300 text-white font-medium py-2 px-4 rounded-full transition-colors flex items-center"
        >
          <div
            className={`w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full ${
              loading ? "animate-spin" : ""
            }`}
          ></div>
          Actualizar
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
          onClick={() => handleRouteChange("proveedores/crear")}
        >
          <Plus className="w-4 h-4 inline mr-2" />
          Nuevo proveedor
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
            <div>
              <h3 className="text-sm font-medium text-red-800">
                Error al cargar proveedores
              </h3>
              <p className="text-sm text-red-700 mt-1">{error}</p>
            </div>
          </div>
          <button
            onClick={fetchProviders}
            className="mt-3 bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded text-sm transition-colors"
          >
            Reintentar
          </button>
        </div>
      )}

      {/* Cargando */}
      {loading && (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-6 py-12 text-center">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-500">Cargando proveedores...</p>
          </div>
        </div>
      )}

      {/* Lista */}
      {!loading && !error && (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {providers.map((provider) => (
              <li
                key={provider.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <div className="px-6 py-4 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <Truck className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 capitalize">
                        {provider.name_provider}
                      </p>
                      <p className="text-xs text-gray-500">ID: {provider.id}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex whitespace-nowrap justify-center text-center text-sm font-medium">
                      <button className="flex gap-1 text-indigo-600 hover:text-indigo-900 mr-3 p-1 rounded hover:bg-indigo-50 transition-colors">
                        <Edit className="w-4 h-4" />
                        <span>Editar</span>
                      </button>
                      <button className="flex gap-1 text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50 transition-colors">
                        <Trash2 className="w-4 h-4" />
                        <span>Eliminar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {providers.length === 0 && !loading && !error && (
            <div className="text-center py-12">
              <Truck className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <div className="text-gray-500">
                <p className="text-lg font-medium">
                  No hay proveedores registrados
                </p>
                <p className="mt-1">Comienza agregando uno nuevo</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ProveedoresCrear = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("El nombre del proveedor es requerido.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(
        "https://back-ecomerce-vz7f.onrender.com/create_provider",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name_provider: name }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      setSuccess("Proveedor creado exitosamente.");
      setName(""); // limpiar campo
    } catch (err) {
      console.error(err);
      setError("Error al crear el proveedor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white shadow rounded-lg p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="sm:col-span-2">
              <label className="block text-lg font-bold text-gray-700">
                Nombre del proveedor <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-3 p-2 pl-5 block text-black w-full border border-gray-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          {/* Mensajes */}
          {success && <p className="text-green-600 text-sm">{success}</p>}
          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setName("")}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-full"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full"
            >
              {loading ? "Creando..." : "Crear proveedor"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ProveedoresAdmin = () => (
  <div className="p-6">
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">
          Configuración de Proveedores
        </h2>
        <Settings className="w-5 h-5 text-gray-400" />
      </div>
      <p className="text-gray-600">
        Configuraciones avanzadas para la gestión de proveedores.
      </p>
    </div>
  </div>
);

// Componentes de Productos
const ProductosListar = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://back-ecomerce-vz7f.onrender.com/all_products"
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      // 👇 Ajusta esto según cómo responda tu API
      const productsArray = Array.isArray(data) ? data : data.products;

      if (!Array.isArray(productsArray)) {
        throw new Error("La respuesta no contiene un arreglo de productos");
      }

      setProducts(productsArray);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const getCategoryName = (categoryId) => {
    const categories = {
      1: "Papelería",
      2: "Piñatería",
      3: "Juguetería",
      4: "Termos & Mugs",
      5: "Cuidado Personal",
      6: "Libros",
      7: "Deporte & Recreación",
    };
    return categories[categoryId] || "Sin categoría";
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(price);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={fetchProducts}
          disabled={loading}
          className="bg-gray-500 hover:bg-gray-700 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded transition-colors flex items-center"
        >
          <div
            className={`w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full ${
              loading ? "animate-spin" : ""
            }`}
          ></div>
          Actualizar
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
          <Plus className="w-4 h-4 inline mr-2" />
          Nuevo producto
        </button>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
            <div>
              <h3 className="text-sm font-medium text-red-800">
                Error al cargar productos
              </h3>
              <p className="text-sm text-red-700 mt-1">{error}</p>
            </div>
          </div>
          <button
            onClick={fetchProducts}
            className="mt-3 bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded text-sm transition-colors"
          >
            Reintentar
          </button>
        </div>
      )}

      {loading && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-6 py-12 text-center">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-500">Cargando productos...</p>
          </div>
        </div>
      )}

      {!loading && !error && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Producto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categoría
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Precio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 capitalize">
                      {product.name_product}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {getCategoryName(product.category_id)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {formatPrice(product.price)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        product.isactive
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.isactive ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                  <td className="flex px-6 py-4 whitespace-nowrap justify-center text-center text-sm font-medium">
                    <button className="flex gap-1 text-indigo-600 hover:text-indigo-900 mr-3 p-1 rounded hover:bg-indigo-50 transition-colors">
                      <Edit className="w-4 h-4" />
                      <span>Editar</span>
                    </button>
                    <button className="flex gap-1 text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50 transition-colors">
                      <Trash2 className="w-4 h-4" />
                      <span>Eliminar</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {products.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500">
                <p className="text-lg font-medium">
                  No hay productos registrados
                </p>
                <p className="mt-1">Comienza agregando tu primer producto</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ProductosCrear = () => {
  const [formData, setFormData] = useState({
    provider_id: "",
    category_id: "",
    name_product: "",
    quantity: "",
    isactive: true,
    price: "",
    image: "",
  });

  const [providers, setProviders] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Obtener proveedores
    fetch("https://back-ecomerce-vz7f.onrender.com/all_provider")
      .then((res) => res.json())
      .then((data) => setProviders(data))
      .catch((err) => console.error("Error al cargar proveedores", err));

    // Obtener categorías
    fetch("https://back-ecomerce-vz7f.onrender.com/get_products_category")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error al cargar categorías", err));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://back-ecomerce-vz7f.onrender.com/create_product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            provider_id: parseInt(formData.provider_id),
            category_id: parseInt(formData.category_id),
            name_product: formData.name_product,
            quantity: parseInt(formData.quantity),
            isactive: formData.isactive,
            price: parseFloat(formData.price),
            image: formData.image,
          }),
        }
      );

      if (!response.ok) throw new Error("Error al crear el producto");

      alert("✅ Producto creado con éxito");
      setFormData({
        provider_id: "",
        category_id: "",
        name_product: "",
        quantity: "",
        isactive: true,
        price: "",
        image: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Error al crear el producto");
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white shadow rounded-lg p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre del producto
              </label>
              <input
                type="text"
                name="name_product"
                value={formData.name_product}
                onChange={handleChange}
                required
                className="mt-1 p-2 pl-3 block w-full border text-black border-gray-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Categoría
              </label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                required
                className="mt-1 p-2.5 text-black block w-full border border-gray-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Seleccionar categoría</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.category_name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Precio
              </label>
              <input
                type="number"
                step="0.01"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="mt-1 p-2 pl-3 text-black block w-full border border-gray-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Proveedor
              </label>
              <select
                name="provider_id"
                value={formData.provider_id}
                onChange={handleChange}
                required
                className="mt-1 p-2.5 text-black block w-full border border-gray-300 rounded-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Seleccionar proveedor</option>
                {providers.map((prov) => (
                  <option key={prov.id} value={prov.id}>
                    {prov.name_provider}
                  </option>
                ))}
              </select>
            </div>

            

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="isactive"
                checked={formData.isactive}
                onChange={handleChange}
              />
              <label className="text-sm text-black">Disponible</label>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() =>
                setFormData({
                  provider_id: "",
                  category_id: "",
                  name_product: "",
                  quantity: "",
                  isactive: true,
                  price: "",
                  image: "",
                })
              }
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Crear producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ProductosCards = () => (
  <div className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          nombre: "Smartphone XYZ",
          precio: "$299.99",
          imagen: "/api/placeholder/300/200",
        },
        {
          nombre: "Camiseta Básica",
          precio: "$19.99",
          imagen: "/api/placeholder/300/200",
        },
        {
          nombre: "Mesa de Centro",
          precio: "$129.99",
          imagen: "/api/placeholder/300/200",
        },
        {
          nombre: "Auriculares Pro",
          precio: "$89.99",
          imagen: "/api/placeholder/300/200",
        },
        {
          nombre: "Zapatillas Sport",
          precio: "$79.99",
          imagen: "/api/placeholder/300/200",
        },
        {
          nombre: "Lámpara LED",
          precio: "$45.99",
          imagen: "/api/placeholder/300/200",
        },
      ].map((producto, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <Package className="w-12 h-12 text-gray-400" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {producto.nombre}
            </h3>
            <p className="text-xl font-bold text-green-600 mb-4">
              {producto.precio}
            </p>
            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
                Ver
              </button>
              <button className="flex-1 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded text-sm">
                Editar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ProductosAdmin = () => (
  <div className="p-6">
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">
          Configuración de Productos
        </h2>
        <Settings className="w-5 h-5 text-gray-400" />
      </div>
      <p className="text-gray-600">
        Configuraciones avanzadas para la gestión de productos.
      </p>
    </div>
  </div>
);

// Otros componentes
const ProfilePage = () => (
  <div className="p-6">
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-gray-600" />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-900">Administrador</h2>
          <p className="text-gray-600">admin@cositaspa.com</p>
        </div>
      </div>
      <div className="space-y-4">
        <button className="w-full text-left p-3 border border-gray-300 rounded-md hover:bg-gray-50">
          Cambiar contraseña
        </button>
        <button className="w-full text-left p-3 border border-gray-300 rounded-md hover:bg-gray-50">
          Configuración de notificaciones
        </button>
        <button className="w-full text-left p-3 border border-gray-300 rounded-md hover:bg-gray-50">
          Preferencias del sistema
        </button>
      </div>
    </div>
  </div>
);

// Componente principal con sistema de enrutamiento
const AdminDashboard = () => {
  const [currentRoute, setCurrentRoute] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    categorias: false,
    proveedores: false,
    productos: false,
  });

  const handleRouteChange = (route) => {
    setCurrentRoute(route);
  };

  const handleLogout = () => {
    alert("Cerrando sesión...");
    // Aquí implementarías la lógica de logout
  };

  // Función para renderizar el componente correcto según la ruta
  const renderCurrentComponent = () => {
    switch (currentRoute) {
      case "home":
        return <HomePage />;
      case "categorias/listar":
        return <CategoriasListar />;
      case "categorias/crear":
        return <CategoryCreate />;
      case "categorias/admin":
        return <CategoriasAdmin />;
      case "proveedores/listar":
        return <ProveedoresListar />;
      case "proveedores/crear":
        return <ProveedoresCrear />;
      case "proveedores/admin":
        return <ProveedoresAdmin />;
      case "productos/listar":
        return <ProductosListar />;
      case "productos/crear":
        return <ProductosCrear />;
      case "productos/cards":
        return <ProductosCards />;
      case "productos/admin":
        return <ProductosAdmin />;
      case "profile":
        return <ProfilePage />;
      case "":
        return;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Overlay para móvil */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentRoute={currentRoute}
        expandedSections={expandedSections}
        setExpandedSections={setExpandedSections}
        onRouteChange={handleRouteChange}
        onLogout={handleLogout}
      />

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm lg:static lg:overflow-y-visible">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="pt-4 pb-4 text-2xl font-semibold text-gray-900">
              {getCurrentPageTitle(currentRoute)}
            </h1>
            <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
              <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                <div className="flex-shrink-0 flex items-center">
                  <button
                    className="p-2 rounded-md text-gray-400 lg:hidden"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden xl:col-span-4">
                {/* Botón de usuario para móvil */}
                <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500">
                  <User className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Área de contenido principal */}
        <main className="flex-1 overflow-y-auto">
          {renderCurrentComponent()}
        </main>
      </div>
    </div>
  );
};

// Función helper para obtener el título de la página actual
const getCurrentPageTitle = (route) => {
  const titles = {
    home: "Panel de administración",
    "categorias/listar": "Lista de categorías",
    "categorias/crear": "Crear categoría",
    "categorias/admin": "Administrar categorías",
    "proveedores/listar": "Lista de proveedores",
    "proveedores/crear": "Crear proveedor",
    "proveedores/admin": "Administrar proveedores",
    "productos/listar": "Lista de productos",
    "productos/crear": "Crear producto",
    "productos/cards": "Productos en Cards",
    "productos/admin": "Administrar productos",
    profile: "Perfil de usuario",
    "": "Tienda Principal",
  };
  return titles[route] || "Panel de administración";
};

export default AdminDashboard;
