import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Button } from "~/components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Campus Resources - EduHub" },
    { name: "description", content: "Find study spots, labs, and campus amenities" },
  ];
};

export default function Campus() {
  const [resources] = useState([
    {
      id: "1",
      name: "Science Library",
      type: "study_space",
      location: "Building A, Floor 3",
      description: "Quiet study space with science journals and research materials",
      capacity: 200,
      amenities: ["WiFi", "Power Outlets", "Printing", "Silent Zone"],
      hours: "24/7",
      rating: 4.8,
      isAvailable: true
    },
    {
      id: "2", 
      name: "Chemistry Lab",
      type: "lab",
      location: "Building B, Floor 2",
      description: "Fully equipped chemistry laboratory for experiments",
      capacity: 30,
      amenities: ["Fume Hoods", "Equipment", "Safety Gear"],
      hours: "8 AM - 6 PM",
      rating: 4.5,
      isAvailable: false
    },
    {
      id: "3",
      name: "Student Café",
      type: "food",
      location: "Student Union, Ground Floor",
      description: "Coffee, snacks, and light meals",
      capacity: 100,
      amenities: ["WiFi", "Outdoor Seating", "Group Tables"],
      hours: "7 AM - 10 PM",
      rating: 4.2,
      isAvailable: true
    },
    {
      id: "4",
      name: "Computer Lab",
      type: "lab", 
      location: "Building C, Floor 1",
      description: "24/7 computer access with specialized software",
      capacity: 50,
      amenities: ["High-Speed Internet", "Printing", "Software"],
      hours: "24/7",
      rating: 4.6,
      isAvailable: true
    }
  ]);

  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredResources = selectedType === "all" 
    ? resources 
    : resources.filter(resource => resource.type === selectedType);

  const getTypeColor = (type: string) => {
    const colors = {
      study_space: "bg-blue-100 text-blue-800",
      lab: "bg-green-100 text-green-800", 
      food: "bg-orange-100 text-orange-800",
      library: "bg-purple-100 text-purple-800",
      other: "bg-gray-100 text-gray-800"
    };
    return colors[type as keyof typeof colors] || colors.other;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Campus Resources</h1>
        <p className="text-xl text-gray-600">
          Find study spots, labs, and campus amenities
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        {["all", "study_space", "lab", "food", "library"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedType === type
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {type === "all" ? "All" : type.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase())}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900">{resource.name}</h3>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                  {resource.type.replace("_", " ")}
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Location:</span>
                  <span className="ml-2">{resource.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Hours:</span>
                  <span className="ml-2">{resource.hours}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Capacity:</span>
                  <span className="ml-2">{resource.capacity} people</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-medium text-gray-700 mb-2">Amenities:</div>
                <div className="flex flex-wrap gap-1">
                  {resource.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(resource.rating) ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{resource.rating}</span>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  resource.isAvailable 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {resource.isAvailable ? "Available" : "Busy"}
                </div>
              </div>
            </div>
            
            <div className="px-6 py-3 bg-gray-50 border-t">
              <Button variant="primary" className="w-full">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Campus Map</h2>
        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-lg font-medium">Interactive Campus Map</div>
            <div className="text-sm">Click on buildings to see available resources</div>
          </div>
        </div>
      </div>
    </div>
  );
}
