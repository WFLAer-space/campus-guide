import React from 'react';
import { School, Users, Map } from 'lucide-react';

interface NavbarProps {
  activeView: 'teachers' | 'map';
  onViewChange: (view: 'teachers' | 'map') => void;
}

export function Navbar({ activeView, onViewChange }: NavbarProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <School className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Campus Info</h1>
          </div>
          
          <nav className="flex space-x-1">
            <button
              onClick={() => onViewChange('teachers')}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                activeView === 'teachers'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Users className="h-5 w-5" />
              <span className="hidden sm:inline">Teachers</span>
            </button>
            <button
              onClick={() => onViewChange('map')}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                activeView === 'map'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Map className="h-5 w-5" />
              <span className="hidden sm:inline">Map</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}