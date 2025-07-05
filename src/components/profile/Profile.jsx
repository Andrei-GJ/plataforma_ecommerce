import React, { useState } from 'react';
import { User, Heart, Info, LogOut, Edit2, Trash2, Plus } from 'lucide-react';

const CustomerProfile = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Jhanvi shah",
      phone: "8980252445",
      address: "1/4 Pragatiagar Flats, opp. jain derasar, near Jain derasar, Vijaynagar road",
      type: "Home",
      isDefault: true,
      isBilling: true
    },
    {
      id: 2,
      name: "Jhanvi shah",
      phone: "8980252445",
      address: "1/4 Pragatiagar Flats, opp. jain derasar, near Jain derasar, Vijaynagar road",
      type: "Home",
      isDefault: false,
      isBilling: false
    },
    {
      id: 3,
      name: "Jhanvi shah",
      phone: "8980252445",
      address: "1/4 Pragatiagar Flats, opp. jain derasar, near Jain derasar, Vijaynagar road",
      type: "Office",
      isDefault: false,
      isBilling: false
    },
    {
      id: 4,
      name: "Jhanvi shah",
      phone: "8980252445",
      address: "1/4 Pragatiagar Flats, opp. jain derasar, near Jain derasar, Vijaynagar road",
      type: "Home2",
      isDefault: false,
      isBilling: false
    }
  ]);

  const [activeTab, setActiveTab] = useState('info');

  const handleAddAddress = () => {
    const newAddress = {
      id: addresses.length + 1,
      name: "Nueva Dirección",
      phone: "000000000",
      address: "Dirección nueva por configurar",
      type: "Home",
      isDefault: false,
      isBilling: false
    };
    setAddresses([...addresses, newAddress]);
  };

  const handleRemoveAddress = (id) => {
    setAddresses(addresses.filter(address => address.id !== id));
  };

  const handleSetDefault = (id) => {
    setAddresses(addresses.map(address => ({
      ...address,
      isDefault: address.id === id
    })));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800 mb-1">Hello Jhanvi</h1>
          <p className="text-sm text-gray-500">Welcome to your Account</p>
        </div>
        
        <nav className="mt-6">
          <div className="px-6 space-y-1">
            <button 
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'orders' 
                  ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <User className="mr-3 h-4 w-4" />
              My orders
            </button>
            
            <button 
              onClick={() => setActiveTab('wishlist')}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'wishlist' 
                  ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Heart className="mr-3 h-4 w-4" />
              Wishlist
            </button>
            
            <button 
              onClick={() => setActiveTab('info')}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'info' 
                  ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Info className="mr-3 h-4 w-4" />
              My Info
            </button>
            
            <button 
              onClick={() => setActiveTab('signout')}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'signout' 
                  ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <LogOut className="mr-3 h-4 w-4" />
              Sign out
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {activeTab === 'info' && (
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">My Info</h2>
            
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Your Name</p>
                    <p className="text-gray-900">Jhanvi Shah</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Change
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email Address</p>
                    <p className="text-gray-900">Jhanvi@gmail.com</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Change
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                    <p className="text-gray-900">8980252445</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Change
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Password</p>
                    <p className="text-gray-900">••••••••</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Change
                  </button>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                <button 
                  onClick={handleAddAddress}
                  className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add New
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addresses.map((address) => (
                  <div key={address.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-900 mb-1">{address.name}</h4>
                      <p className="text-sm text-gray-500 mb-2">{address.phone}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {address.address}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        address.type === 'Office' 
                          ? 'bg-purple-100 text-purple-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {address.type}
                      </span>
                      {address.isBilling && (
                        <span className="px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-700">
                          Default billing address
                        </span>
                      )}
                      {address.isDefault && !address.isBilling && (
                        <span className="px-2 py-1 text-xs font-medium rounded bg-yellow-100 text-yellow-700">
                          Default shipping address
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm">
                      <button 
                        onClick={() => handleRemoveAddress(address.id)}
                        className="text-red-600 hover:text-red-800 flex items-center"
                      >
                        <Trash2 className="h-3 w-3 mr-1" />
                        Remove
                      </button>
                      <button className="text-blue-600 hover:text-blue-800 flex items-center">
                        <Edit2 className="h-3 w-3 mr-1" />
                        Edit
                      </button>
                      {!address.isDefault && (
                        <button 
                          onClick={() => handleSetDefault(address.id)}
                          className="text-gray-600 hover:text-gray-800"
                        >
                          Set as default
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">My Orders</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-500 text-center py-8">No orders found.</p>
            </div>
          </div>
        )}

        {activeTab === 'wishlist' && (
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Wishlist</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-500 text-center py-8">Your wishlist is empty.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerProfile;