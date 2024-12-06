import React, { useState } from 'react';
import { TeacherSearch } from './components/TeacherSearch';
import { CampusMap } from './components/CampusMap';
import { Navbar } from './components/layout/Navbar';

export default function App() {
  const [activeView, setActiveView] = useState<'teachers' | 'map'>('teachers');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeView={activeView} onViewChange={setActiveView} />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className={`space-y-6 ${activeView === 'map' ? 'max-w-5xl mx-auto' : ''}`}>
          {activeView === 'teachers' ? (
            <TeacherSearch />
          ) : (
            <CampusMap />
          )}
        </div>
      </main>
    </div>
  );
}