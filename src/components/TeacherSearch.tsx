import React, { useState, useMemo } from 'react';
import { SearchInput } from './ui/SearchInput';
import { TeacherCard } from './teacher/TeacherCard';
import { Search } from 'lucide-react';
import campusData from '../data/campusData.json';

export function TeacherSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTeachers = useMemo(() => {
    if (searchTerm.length < 2) return [];
    
    return campusData.teachers.filter(teacher =>
      Object.values(teacher).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Teacher Directory</h2>
      
      <div className="mb-6">
        <SearchInput
          placeholder="Search teachers by name, subject, or office..."
          onSearch={setSearchTerm}
        />
      </div>

      {searchTerm.length < 2 ? (
        <div className="text-center p-8 bg-white rounded-lg shadow-sm">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Start Searching
          </h3>
          <p className="text-gray-500">
            Enter at least 2 characters to search for teachers by name, subject, office, or contact information.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTeachers.map(teacher => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
          
          {filteredTeachers.length === 0 && (
            <div className="text-center text-gray-500 p-8 bg-white rounded-lg shadow-sm">
              No teachers found matching "{searchTerm}".
            </div>
          )}
        </div>
      )}
    </div>
  );
}