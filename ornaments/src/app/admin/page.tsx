"use client"
import React, { useState } from 'react';
import { FiAlertCircle,FiSave,FiPackage,FiCheckCircle } from "react-icons/fi";

interface Product {
  name: string;
  price: number;
  type: string;
  description: string;
  off?: number;
  specialOffer?: {
    desc: string;
    validUntil: string;
  };
}

interface ApiResponse {
  success: boolean;
  message: string;
}

const ProductAdminPage: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    name: '',
    price: 0,
    type: '',
    description: '',
    off: 0,
    specialOffer: {
      desc: '',
      validUntil: ''
    }
  });
  
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof Product, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof Product, string>> = {};
    
    if (!product.name.trim()) newErrors.name = 'Product name is required';
    if (product.price <= 0) newErrors.price = 'Price must be greater than 0';
    if (!product.type.trim()) newErrors.type = 'Product type is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof Product, value: any) => {
    setProduct(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handleSpecialOfferChange = (field: 'desc' | 'validUntil', value: string) => {
    setProduct(prev => ({
      ...prev,
      specialOffer: {
        ...prev.specialOffer!,
        [field]: value
      }
    }));
  };

  const handleSubmit = async () => {
    
    if (!validateForm()) return;
    
    setLoading(true);
    setResponse(null);
    
    try {
      // Dummy API call - replace with your actual endpoint
      const response = await fetch('/api/products', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      
      // Simulate API response for demo
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setResponse({
        success: Math.random() > 0.2, // 80% success rate for demo
        message: Math.random() > 0.2 ? 'Product updated successfully!' : 'Failed to update product. Please try again.'
      });
      
    } catch (error) {
      setResponse({
        success: false,
        message: 'Network error. Please check your connection.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-16 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mb-4 shadow-lg">
            <FiPackage className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Product Admin Panel
          </h1>
          <p className="text-rose-600/70">Update and manage your product information</p>
        </div>

        {/* Response Message */}
        {response && (
          <div className={`mb-6 p-4 rounded-lg border ${
            response.success 
              ? 'bg-green-50 border-green-200 text-green-800' 
              : 'bg-red-50 border-red-200 text-red-800'
          } transition-all duration-300`}>
            <div className="flex items-center gap-2">
              {response.success ? (
                <FiCheckCircle className="w-5 h-5" />
              ) : (
                <FiAlertCircle className="w-5 h-5" />
              )}
              <span className="font-medium">{response.message}</span>
            </div>
          </div>
        )}

        {/* Main Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-rose-100 overflow-hidden">
          <div className="bg-gradient-to-r from-rose-400 to-pink-500 p-6">
            <h2 className="text-2xl font-semibold text-white">Product Information</h2>
          </div>
          
          <div className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-rose-700">
                  Product Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={product.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-300 ${
                    errors.name 
                      ? 'border-red-300 bg-red-50' 
                      : 'border-rose-200 bg-white focus:border-rose-400'
                  }`}
                  placeholder="Enter product name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Product Type */}
              <div className="space-y-2">
                <label htmlFor="type" className="block text-sm font-medium text-rose-700">
                  Product Type *
                </label>
                <input
                  type="text"
                  id="type"
                  value={product.type}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-300 ${
                    errors.type 
                      ? 'border-red-300 bg-red-50' 
                      : 'border-rose-200 bg-white focus:border-rose-400'
                  }`}
                  placeholder="e.g., Electronics, Clothing"
                />
                {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
              </div>

              {/* Price */}
              <div className="space-y-2">
                <label htmlFor="price" className="block text-sm font-medium text-rose-700">
                  Price ($) *
                </label>
                <input
                  type="number"
                  id="price"
                  min="0"
                  step="0.01"
                  value={product.price}
                  onChange={(e) => handleInputChange('price', parseFloat(e.target.value) || 0)}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-300 ${
                    errors.price 
                      ? 'border-red-300 bg-red-50' 
                      : 'border-rose-200 bg-white focus:border-rose-400'
                  }`}
                  placeholder="0.00"
                />
                {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
              </div>

              {/* Discount Percentage */}
              <div className="space-y-2">
                <label htmlFor="off" className="block text-sm font-medium text-rose-700">
                  Discount (%)
                </label>
                <input
                  type="number"
                  id="off"
                  min="0"
                  max="100"
                  value={product.off || ''}
                  onChange={(e) => handleInputChange('off', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-rose-200 bg-white focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300 transition-all duration-200"
                  placeholder="0"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium text-rose-700">
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                value={product.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-rose-200 bg-white focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300 transition-all duration-200 resize-none"
                placeholder="Enter product description..."
              />
            </div>

            {/* Special Offer Section */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 border border-pink-200">
              <h3 className="text-lg font-semibold text-rose-700 mb-4">Special Offer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="specialOfferDesc" className="block text-sm font-medium text-rose-700">
                    Offer Description
                  </label>
                  <input
                    type="text"
                    id="specialOfferDesc"
                    value={product.specialOffer?.desc || ''}
                    onChange={(e) => handleSpecialOfferChange('desc', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-pink-200 bg-white focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all duration-200"
                    placeholder="e.g., Buy 2 Get 1 Free"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="validUntil" className="block text-sm font-medium text-rose-700">
                    Valid Until
                  </label>
                  <input
                    type="date"
                    id="validUntil"
                    value={product.specialOffer?.validUntil || ''}
                    onChange={(e) => handleSpecialOfferChange('validUntil', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-pink-200 bg-white focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 transform ${
                  loading
                    ? 'bg-rose-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 hover:scale-105 shadow-lg hover:shadow-xl'
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Updating...
                  </>
                ) : (
                  <>
                    <FiSave className="w-5 h-5" />
                    Update Product
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdminPage;