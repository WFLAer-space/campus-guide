import React from 'react';
import type { Room } from '../../types/campus';

const legendItems: Array<{ type: Room['type']; label: string }> = [
  { type: 'classroom', label: 'Classroom' },
  { type: 'office', label: 'Office' },
  { type: 'laboratory', label: 'Laboratory' },
  { type: 'restroom', label: 'Restroom' },
  { type: 'other', label: 'Other' }
];

export function MapLegend() {
  const getColorForType = (type: Room['type']) => {
    const colors = {
      classroom: 'bg-blue-100 border-blue-200',
      office: 'bg-green-100 border-green-200',
      laboratory: 'bg-purple-100 border-purple-200',
      restroom: 'bg-gray-100 border-gray-200',
      other: 'bg-yellow-100 border-yellow-200'
    };
    return colors[type];
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {legendItems.map(({ type, label }) => (
        <div key={type} className="flex items-center gap-2">
          <div className={`w-4 h-4 rounded border ${getColorForType(type)}`} />
          <span className="text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}