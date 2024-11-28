import React from 'react';
import { motion } from 'framer-motion';
import { Room } from '../types/campus';
import { getRoomColor } from '../utils/roomUtils';

interface FloorPlanProps {
  rooms: Room[];
  onRoomClick: (room: Room) => void;
}

export function FloorPlan({ rooms, onRoomClick }: FloorPlanProps) {
  return (
    <div className="relative w-full h-[calc(100vh-12rem)] bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-inner">
      <div className="absolute inset-0 p-4">
        {rooms.map((room) => (
          <motion.div
            key={room.id}
            className="absolute cursor-pointer rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            style={{
              left: `${room.x}px`,
              top: `${room.y}px`,
              width: `${room.width}px`,
              height: `${room.height}px`,
              backgroundColor: getRoomColor(room.type),
            }}
            onClick={() => onRoomClick(room)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-medium text-gray-800">{room.number}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}