import { Room } from '../types/campus';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  BeakerIcon, 
  BuildingOfficeIcon,
  ArrowsUpDownIcon
} from '@heroicons/react/24/outline';

interface RoomDetailsProps {
  room: Room | null;
}

export function RoomDetails({ room }: RoomDetailsProps) {
  if (!room) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case 'classroom':
        return <AcademicCapIcon className="h-6 w-6" />;
      case 'laboratory':
        return <BeakerIcon className="h-6 w-6" />;
      case 'office':
        return <BuildingOfficeIcon className="h-6 w-6" />;
      default:
        return <ArrowsUpDownIcon className="h-6 w-6" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
    >
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
            {getIcon(room.type)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Room {room.number}</h3>
            <p className="text-sm text-gray-600">{room.name}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500 capitalize flex items-center">
            <span className="font-medium mr-2">Type:</span> {room.type}
          </p>
        </div>
      </div>
    </motion.div>
  );
}