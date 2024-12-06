import React from 'react';
import type { Building, Floor } from '../../types/campus';

interface BuildingSelectorProps {
  buildings: Building[];
  selectedBuilding: Building;
  selectedFloor: Floor;
  onBuildingChange: (building: Building) => void;
  onFloorChange: (floor: Floor) => void;
}

export function BuildingSelector({
  buildings,
  selectedBuilding,
  selectedFloor,
  onBuildingChange,
  onFloorChange,
}: BuildingSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {buildings.map((building) => (
          <button
            key={building.id}
            onClick={() => onBuildingChange(building)}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedBuilding.id === building.id
                ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-600 ring-offset-2'
                : 'bg-white hover:bg-gray-50 text-gray-700 shadow-sm border border-gray-200'
            }`}
          >
            <span className="font-medium">{building.name}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {selectedBuilding.floors.map((floor) => (
          <button
            key={floor.level}
            onClick={() => onFloorChange(floor)}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedFloor.level === floor.level
                ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-600 ring-offset-2'
                : 'bg-white hover:bg-gray-50 text-gray-700 shadow-sm border border-gray-200'
            }`}
          >
            <span className="font-medium">Floor {floor.level}</span>
            <span className="ml-2 text-sm text-gray-500">
              ({floor.rooms.length} rooms)
            </span>
          </button>
        ))}
      </div>
    </div>
  );
} 