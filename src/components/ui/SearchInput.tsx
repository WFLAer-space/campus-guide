import React from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: (value: string) => void;
}

export function SearchInput({ onSearch, ...props }: SearchInputProps) {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full px-4 py-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
        onChange={(e) => onSearch(e.target.value)}
        {...props}
      />
      <Search className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
    </div>
  );
}