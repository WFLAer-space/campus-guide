import { Building, Floor, Room } from '../types/campus';
import { BuildingSelector } from './BuildingSelector';
import { FloorSelector } from './FloorSelector';
import { RoomDetails } from './RoomDetails';

interface SidebarProps {
  buildings: Building[];
  selectedBuilding: Building;
  selectedFloor: Floor;
  selectedRoom: Room | null;
  onBuildingChange: (building: Building) => void;
  onFloorChange: (floor: Floor) => void;
}

export function Sidebar({
  buildings,
  selectedBuilding,
  selectedFloor,
  selectedRoom,
  onBuildingChange,
  onFloorChange,
}: SidebarProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Building
        </label>
        <BuildingSelector
          buildings={buildings}
          selectedBuilding={selectedBuilding}
          onBuildingChange={onBuildingChange}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Floor
        </label>
        <FloorSelector
          floors={selectedBuilding.floors}
          selectedFloor={selectedFloor}
          onFloorChange={onFloorChange}
        />
      </div>

      {selectedRoom && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <RoomDetails room={selectedRoom} />
        </div>
      )}
    </div>
  );
}