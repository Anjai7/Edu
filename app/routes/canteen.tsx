import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Canteen - EduHub" },
    { name: "description", content: "Order food online and track your orders" },
  ];
};

export default function Canteen() {
  const [cart, setCart] = useState<{[key: number]: number}>({});
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Items" },
    { id: "meals", name: "Meals" },
    { id: "snacks", name: "Snacks" },
    { id: "beverages", name: "Beverages" },
    { id: "desserts", name: "Desserts" }
  ];

  const menuItems = [
    {
      id: 1,
      name: "Chicken Burger",
      description: "Grilled chicken patty with lettuce, tomato, and special sauce",
      price: 85,
      category: "meals",
      stock: 25,
      image: "🍔",
      available: true
    },
    {
      id: 2,
      name: "Vegetable Sandwich",
      description: "Fresh vegetables with mayo and cheese",
      price: 45,
      category: "meals",
      stock: 30,
      image: "🥪",
      available: true
    },
    {
      id: 3,
      name: "Masala Tea",
      description: "Hot Indian spiced tea",
      price: 12,
      category: "beverages",
      stock: 50,
      image: "☕",
      available: true
    },
    {
      id: 4,
      name: "Fresh Juice",
      description: "Mixed fruit juice",
      price: 25,
      category: "beverages",
      stock: 20,
      image: "🧃",
      available: true
    },
    {
      id: 5,
      name: "Samosa",
      description: "Crispy fried pastry with potato filling",
      price: 20,
      category: "snacks",
      stock: 40,
      image: "🥟",
      available: true
    },
    {
      id: 6,
      name: "Pizza Slice",
      description: "Cheese pizza slice",
      price: 60,
      category: "meals",
      stock: 15,
      image: "🍕",
      available: true
    },
    {
      id: 7,
      name: "Ice Cream",
      description: "Vanilla ice cream cup",
      price: 30,
      category: "desserts",
      stock: 0,
      image: "🍨",
      available: false
    },
    {
      id: 8,
      name: "Cold Coffee",
      description: "Iced coffee with milk",
      price: 35,
      category: "beverages",
      stock: 25,
      image: "🥤",
      available: true
    }
  ];

  const recentOrders = [
    {
      id: "ORD001",
      date: "2025-09-13",
      items: ["Chicken Burger", "Cold Coffee"],
      total: 120,
      status: "completed"
    },
    {
      id: "ORD002",
      date: "2025-09-12",
      items: ["Samosa", "Masala Tea"],
      total: 32,
      status: "completed"
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find(i => i.id === parseInt(itemId));
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">🍽️ Canteen</h1>
          <p className="text-xl text-gray-600 mt-2">Order your favorite food online</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="text-lg font-semibold">Cart ({getTotalItems()} items)</div>
          <div className="text-2xl font-bold text-green-600">₹{getTotalPrice()}</div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-wrap gap-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === category.id
                  ? "bg-orange-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Menu Items */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map(item => (
              <div key={item.id} className={`bg-white rounded-lg shadow-md p-6 ${
                !item.available ? 'opacity-50' : ''
              }`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{item.image}</span>
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-600">₹{item.price}</div>
                    <div className="text-xs text-gray-500">
                      {item.available ? `${item.stock} left` : 'Out of stock'}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    item.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.available ? 'Available' : 'Out of Stock'}
                  </span>

                  {item.available && (
                    <div className="flex items-center gap-2">
                      {cart[item.id] ? (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="font-medium">{cart[item.id]}</span>
                          <button
                            onClick={() => addToCart(item.id)}
                            className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700"
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item.id)}
                          className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart and Recent Orders */}
        <div className="space-y-6">
          {/* Cart Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">🛒 Your Order</h3>
            
            {Object.keys(cart).length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {Object.entries(cart).map(([itemId, quantity]) => {
                  const item = menuItems.find(i => i.id === parseInt(itemId));
                  if (!item) return null;
                  
                  return (
                    <div key={itemId} className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">₹{item.price} × {quantity}</div>
                      </div>
                      <div className="font-bold">₹{item.price * quantity}</div>
                    </div>
                  );
                })}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span className="text-green-600">₹{getTotalPrice()}</span>
                  </div>
                </div>
                
                <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors">
                  Place Order
                </button>
              </div>
            )}
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">📋 Recent Orders</h3>
            <div className="space-y-4">
              {recentOrders.map(order => (
                <div key={order.id} className="border border-gray-200 rounded-md p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium">#{order.id}</div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {order.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    {order.items.join(", ")}
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>{new Date(order.date).toLocaleDateString()}</span>
                    <span className="font-bold">₹{order.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
