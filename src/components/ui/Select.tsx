import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export function Select({ label, className = '', ...props }: SelectProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <select
          className={`w-full p-2 border rounded-lg appearance-none bg-white pr-10 ${className}`}
          {...props}
        />
        <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
}