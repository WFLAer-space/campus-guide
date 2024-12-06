import React, { useEffect, memo } from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string;
  onHide: () => void;
}

export const Toast = memo(function Toast({ message, onHide }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onHide, 2000);
    return () => clearTimeout(timer);
  }, [onHide]);

  return (
    <div 
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-fade-in"
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 backdrop-blur-sm bg-opacity-80">
        <Check className="h-4 w-4 text-green-400" />
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}); 