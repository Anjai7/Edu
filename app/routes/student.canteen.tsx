import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Link } from "@remix-run/react";
import { 
  ShoppingBagIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  FunnelIcon,
  ArrowLeftIcon,
  ShoppingCartIcon,
  StarIcon
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Canteen Stock - Student Dashboard" },
    { name: "description", content: "View available canteen items and stock levels" },
  ];
};

// Mock data - replace with actual data from your backend
const mockCanteenItems = [
  {
    id: 1,
    name: "Vegetable Sandwich",
    category: "Snacks",
    price: 3.50,
    originalPrice: 4.00,
    description: "Fresh vegetables with whole wheat bread and mayo",
    image: "🥪",
    stockLevel: 25,
    maxStock: 50,
    availability: "available",
    preparationTime: "5 mins",
    isVegetarian: true,
    isVegan: false,
    allergens: ["Gluten", "Dairy"],
    rating: 4.2,
    reviews: 156,
    nutritionalInfo: {
      calories: 280,
      protein: 8,
      carbs: 35,
      fat: 12
    }
  },
  {
    id: 2,
    name: "Chicken Burger",
    category: "Main Course",
    price: 6.50,
    originalPrice: 6.50,
    description: "Grilled chicken patty with lettuce, tomato, and special sauce",
    image: "🍔",
    stockLevel: 3,
    maxStock: 30,
    availability: "low_stock",
    preparationTime: "12 mins",
    isVegetarian: false,
    isVegan: false,
    allergens: ["Gluten", "Dairy"],
    rating: 4.7,
    reviews: 243,
    nutritionalInfo: {
      calories: 520,
      protein: 28,
      carbs: 42,
      fat: 26
    }
  },
  {
    id: 3,
    name: "Fresh Orange Juice",
    category: "Beverages",
    price: 2.00,
    originalPrice: 2.50,
    description: "Freshly squeezed orange juice with no added sugar",
    image: "🍊",
    stockLevel: 0,
    maxStock: 40,
    availability: "out_of_stock",
    preparationTime: "2 mins",
    isVegetarian: true,
    isVegan: true,
    allergens: [],
    rating: 4.5,
    reviews: 89,
    nutritionalInfo: {
      calories: 110,
      protein: 2,
      carbs: 26,
      fat: 0
    }
  },
  {
    id: 4,
    name: "Caesar Salad",
    category: "Salads",
    price: 4.75,
    originalPrice: 4.75,
    description: "Crisp romaine lettuce with Caesar dressing and croutons",
    image: "🥗",
    stockLevel: 18,
    maxStock: 25,
    availability: "available",
    preparationTime: "8 mins",
    isVegetarian: true,
    isVegan: false,
    allergens: ["Dairy", "Eggs"],
    rating: 4.1,
    reviews: 124,
    nutritionalInfo: {
      calories: 220,
      protein: 6,
      carbs: 12,
      fat: 18
    }
  },
  {
    id: 5,
    name: "Chocolate Chip Cookies",
    category: "Desserts",
    price: 1.50,
    originalPrice: 2.00,
    description: "Freshly baked cookies with chocolate chips",
    image: "🍪",
    stockLevel: 45,
    maxStock: 60,
    availability: "available",
    preparationTime: "Ready",
    isVegetarian: true,
    isVegan: false,
    allergens: ["Gluten", "Dairy", "Eggs"],
    rating: 4.8,
    reviews: 312,
    nutritionalInfo: {
      calories: 180,
      protein: 3,
      carbs: 24,
      fat: 8
    }
  },
  {
    id: 6,
    name: "Iced Coffee",
    category: "Beverages",
    price: 2.75,
    originalPrice: 2.75,
    description: "Cold brew coffee with ice and optional milk",
    image: "☕",
    stockLevel: 32,
    maxStock: 40,
    availability: "available",
    preparationTime: "3 mins",
    isVegetarian: true,
    isVegan: true,
    allergens: [],
    rating: 4.3,
    reviews: 198,
    nutritionalInfo: {
      calories: 15,
      protein: 1,
      carbs: 2,
      fat: 0
    }
  },
  {
    id: 7,
    name: "Margherita Pizza Slice",
    category: "Main Course",
    price: 3.25,
    originalPrice: 3.25,
    description: "Classic pizza with tomato sauce, mozzarella, and basil",
    image: "🍕",
    stockLevel: 12,
    maxStock: 36,
    availability: "available",
    preparationTime: "Ready",
    isVegetarian: true,
    isVegan: false,
    allergens: ["Gluten", "Dairy"],
    rating: 4.4,
    reviews: 267,
    nutritionalInfo: {
      calories: 310,
      protein: 14,
      carbs: 35,
      fat: 14
    }
  },
  {
    id: 8,
    name: "Fruit Smoothie",
    category: "Beverages",
    price: 3.00,
    originalPrice: 3.50,
    description: "Mixed fruit smoothie with banana, berries, and yogurt",
    image: "🥤",
    stockLevel: 8,
    maxStock: 20,
    availability: "low_stock",
    preparationTime: "4 mins",
    isVegetarian: true,
    isVegan: false,
    allergens: ["Dairy"],
    rating: 4.6,
    reviews: 145,
    nutritionalInfo: {
      calories: 195,
      protein: 6,
      carbs: 42,
      fat: 2
    }
  }
];

export default function StudentCanteen() {
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterAvailability, setFilterAvailability] = useState("all");
  const [filterDietary, setFilterDietary] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [cart, setCart] = useState<{[key: number]: number}>({});

  const categories = [...new Set(mockCanteenItems.map(item => item.category))];

  const filteredItems = mockCanteenItems
    .filter(item => {
      if (filterCategory !== "all" && item.category !== filterCategory) return false;
      if (filterAvailability !== "all" && item.availability !== filterAvailability) return false;
      if (filterDietary === "vegetarian" && !item.isVegetarian) return false;
      if (filterDietary === "vegan" && !item.isVegan) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "stock") return b.stockLevel - a.stockLevel;
      return 0;
    });

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case 'available':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'low_stock':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />;
      case 'out_of_stock':
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'low_stock':
        return 'bg-yellow-100 text-yellow-800';
      case 'out_of_stock':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStockPercentage = (current: number, max: number) => {
    return (current / max) * 100;
  };

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) - 1)
    }));
  };

  const getTotalCartItems = () => {
    return Object.values(cart).reduce((total, count) => total + count, 0);
  };

  const getTotalCartPrice = () => {
    return Object.entries(cart).reduce((total, [itemId, count]) => {
      const item = mockCanteenItems.find(i => i.id === parseInt(itemId));
      return total + (item ? item.price * count : 0);
    }, 0);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link 
            to="/student/dashboard"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Canteen Stock</h1>
            <p className="text-gray-600">View available items and place orders</p>
          </div>
        </div>
        {getTotalCartItems() > 0 && (
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <ShoppingCartIcon className="h-5 w-5" />
              <span>{getTotalCartItems()} items</span>
              <span>${getTotalCartPrice().toFixed(2)}</span>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <ShoppingBagIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Items</p>
              <p className="text-2xl font-bold text-gray-900">{mockCanteenItems.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Available</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockCanteenItems.filter(item => item.availability === 'available').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Low Stock</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockCanteenItems.filter(item => item.availability === 'low_stock').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-lg">
              <XCircleIcon className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Out of Stock</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockCanteenItems.filter(item => item.availability === 'out_of_stock').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <FunnelIcon className="h-5 w-5 text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-900">Filters & Sort</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select 
              value={filterCategory} 
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
            <select 
              value={filterAvailability} 
              onChange={(e) => setFilterAvailability(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Items</option>
              <option value="available">Available</option>
              <option value="low_stock">Low Stock</option>
              <option value="out_of_stock">Out of Stock</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Dietary</label>
            <select 
              value={filterDietary} 
              onChange={(e) => setFilterDietary(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Options</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="stock">Stock Level</option>
            </select>
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => {
          const stockPercentage = getStockPercentage(item.stockLevel, item.maxStock);
          const cartQuantity = cart[item.id] || 0;
          
          return (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{item.image}</div>
                  <div className="flex items-center space-x-1">
                    {getAvailabilityIcon(item.availability)}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(item.availability)}`}>
                    {item.availability.replace('_', ' ').toUpperCase()}
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                  {item.isVegetarian && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      🌱 VEG
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {renderStars(item.rating)}
                    <span className="text-sm text-gray-600 ml-1">
                      {item.rating} ({item.reviews})
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <ClockIcon className="h-4 w-4" />
                    <span>{item.preparationTime}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                    <span>Stock: {item.stockLevel}/{item.maxStock}</span>
                    <span>{stockPercentage.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        stockPercentage > 50 ? 'bg-green-500' : 
                        stockPercentage > 20 ? 'bg-yellow-500' : 
                        'bg-red-500'
                      }`}
                      style={{ width: `${stockPercentage}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">${item.price}</span>
                    {item.originalPrice > item.price && (
                      <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.nutritionalInfo.calories} cal
                  </div>
                </div>

                {item.availability !== 'out_of_stock' && (
                  <div className="flex items-center space-x-2">
                    {cartQuantity > 0 ? (
                      <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-gray-600 hover:text-red-600 transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-medium">{cartQuantity}</span>
                        <button 
                          onClick={() => addToCart(item.id)}
                          className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-gray-600 hover:text-green-600 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => addToCart(item.id)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center space-x-2"
                      >
                        <ShoppingCartIcon className="h-4 w-4" />
                        <span>Add to Cart</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <ShoppingBagIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
          <p className="text-gray-600">Try adjusting your filters to see more items.</p>
        </div>
      )}
    </div>
  );
}
