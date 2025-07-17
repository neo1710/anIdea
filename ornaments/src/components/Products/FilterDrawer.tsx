import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setProducts, initialProducts } from "@/store/slices/conversationReducer";

interface ExpandedSections {
  price: boolean;
  category: boolean;
}

interface FilterSidebarProps {
  onFiltersChange?: (filters: {
    priceRange: [number, number];
    selectedCategories: string[];
  }) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFiltersChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    price: true,
    category: true
  });
  const dispatch = useDispatch();

  const categories: string[] = [
    'Charms',
    'Keychains',
    'Fridge Magnets',
    'Necklaces',
  ];

  // Helper to filter products
  const filterProducts = () => {
    let filtered = initialProducts; // Always use initialProducts
    // Filter by price
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    // Filter by category (title)
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product =>
        selectedCategories.some(cat =>
          product.title.toLowerCase().includes(cat.toLowerCase())
        )
      );
    }
    return filtered;
  };

  const toggleSection = (section: keyof ExpandedSections): void => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCategoryChange = (category: string): void => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = (): void => {
    setPriceRange([0, 1000]);
    setSelectedCategories([]);
    dispatch(setProducts(initialProducts)); // Reset to initial product data
    if (onFiltersChange) {
      onFiltersChange({
        priceRange: [0, 1000],
        selectedCategories: []
      });
    }
  };

  const handlePriceChange = (index: number, value: string): void => {
    const newRange: [number, number] = [...priceRange] as [number, number];
    newRange[index] = parseInt(value);
    setPriceRange(newRange);
  };

  const applyFilters = (): void => {
    const filtered = filterProducts();
    dispatch(setProducts(filtered));
    if (onFiltersChange) {
      onFiltersChange({
        priceRange,
        selectedCategories
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`lg:hidden ${isOpen ? "hidden" : ""} fixed top-16 left-2 z-50 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-pink-600 hover:to-rose-600`}
      >
        <FaFilter className='h-5 w-5' />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        sm:sticky sm:block sm:translate-x-0 top-16 left-0 w-[300px] sm:w-[400px] h-[630px] border-r border-pink-200 
        shadow-xl lg:shadow-none z-10 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0 fixed bg-white' : '-translate-x-full hidden'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b backdrop-blur-sm">
          <h2 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Filters
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={clearFilters}
              className="text-sm text-pink-600 hover:text-rose-600 transition-colors duration-200 font-medium"
            >
              Clear All
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-1 hover:bg-pink-100 rounded-full transition-colors duration-200"
            >
              <IoCloseSharp size={18} className="text-pink-600" />
            </button>
          </div>
        </div>

        {/* Filter Content */}
        <div className="p-6 space-y-8 overflow-y-auto h-full pb-20">
          {/* Price Filter */}
          <div className="space-y-4">
            <button
              onClick={() => toggleSection('price')}
              className="flex items-center justify-between w-full text-left group"
            >
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-200">
                Price Range
              </h3>
              {expandedSections.price ? (
                <FaChevronUp size={20} className="text-pink-500 group-hover:text-pink-600 transition-colors duration-200" />
              ) : (
                <FaChevronDown size={20} className="text-pink-500 group-hover:text-pink-600 transition-colors duration-200" />
              )}
            </button>

            {expandedSections.price && (
              <div className="space-y-6 animate-fadeIn">
                {/* Price Range Slider */}
                <div className="px-2">
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[0]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePriceChange(0, e.target.value)}
                      className="absolute w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer range-slider"
                      style={{ zIndex: 1 }}
                    />
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePriceChange(1, e.target.value)}
                      className="absolute w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer range-slider"
                      style={{ zIndex: 2 }}
                    />
                  </div>
                </div>

                {/* Price Display */}
                <div className="flex items-center justify-between bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-4 border border-pink-200">
                  <div className="text-center">
                    <label className="text-sm text-gray-600 font-medium">Min</label>
                    <div className="text-lg font-bold text-pink-600">₹{priceRange[0]}</div>
                  </div>
                  <div className="w-px h-8 bg-pink-200"></div>
                  <div className="text-center">
                    <label className="text-sm text-gray-600 font-medium">Max</label>
                    <div className="text-lg font-bold text-rose-600">₹{priceRange[1]}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Category Filter */}
          <div className="space-y-4">
            <button
              onClick={() => toggleSection('category')}
              className="flex items-center justify-between w-full text-left group"
            >
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-200">
                Categories
              </h3>
              {expandedSections.category ? (
                <FaChevronUp size={20} className="text-pink-500 group-hover:text-pink-600 transition-colors duration-200" />
              ) : (
                <FaChevronDown size={20} className="text-pink-500 group-hover:text-pink-600 transition-colors duration-200" />
              )}
            </button>

            {expandedSections.category && (
              <div className="space-y-3 animate-fadeIn">
                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center space-x-3 cursor-pointer group hover:bg-white hover:bg-opacity-50 p-2 rounded-lg transition-all duration-200"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="sr-only"
                      />
                      <div className={`
                        w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200
                        ${selectedCategories.includes(category)
                          ? 'bg-gradient-to-r from-pink-500 to-rose-500 border-pink-500 shadow-md'
                          : 'border-pink-300 hover:border-pink-400 bg-white'
                        }
                      `}>
                        {selectedCategories.includes(category) && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className={`
                      text-sm font-medium transition-colors duration-200
                      ${selectedCategories.includes(category)
                        ? 'text-pink-700'
                        : 'text-gray-700 group-hover:text-pink-600'
                      }
                    `}>
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Apply Button */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <button
            onClick={applyFilters}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-rose-600 transform hover:scale-[1.02] transition-all duration-300"
          >
            Apply Filters
          </button>
        </div>
      </div>

      <style jsx>{`
        .range-slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ec4899, #f43f5e);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(236, 72, 153, 0.3);
          border: 2px solid white;
        }
        
        .range-slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ec4899, #f43f5e);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(236, 72, 153, 0.3);
          border: 2px solid white;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default FilterSidebar;