import React from 'react';
import { Building2 } from 'lucide-react';
import type { Room } from '../../types/campus';

interface RoomCardProps {
  room: Room;
}

const roomTypeIcons = {
  classroom: '👨‍🏫',
  office: '💼',
  laboratory: '🧪',
  restroom: '🚻',
  other: '📍'
};

export function RoomCard({ room }: RoomCardProps) {
  const getRoomTypeColor = (type: Room['type']) => {
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
    <div className={`p-4 rounded-lg border-2 ${getRoomTypeColor(room.type)}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-gray-800">{room.id}</span>
        <span className="text-xl" role="img" aria-label={room.type}>
          {roomTypeIcons[room.type]}
        </span>
      </div>
      <p className="text-sm text-gray-600">{room.name || room.type}</p>
    </div>
  );
}