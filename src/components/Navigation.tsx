import React from 'react';
import { Menu, Search, User, Map, Award } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Map className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">TravelTribe</span>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              
              <a href="#destinations" className="text-gray-600 hover:text-indigo-600">
                Destinations
              </a>
              <a href="#itineraries" className="text-gray-600 hover:text-indigo-600">
                Itineraries
              </a>
              <a href="#rankings" className="text-gray-600 hover:text-indigo-600 flex items-center">
                <Award className="h-5 w-5 mr-1" />
                Rankings
              </a>
            </div>
            
            <div className="ml-6 flex items-center">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <User className="h-6 w-6 text-gray-600" />
              </button>
              <button className="md:hidden p-2 rounded-full hover:bg-gray-100">
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}