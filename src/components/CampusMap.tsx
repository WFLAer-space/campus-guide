import React, { useState } from 'react';
import { Select } from './ui/Select';
import { RoomCard } from './map/RoomCard';
import { MapLegend } from './map/MapLegend';
import campusData from '../data/campusData.json';
import type { Building, Floor } from '../types/campus';

export function CampusMap() {
  const [selectedBuilding, setSelectedBuilding] = useState<Building>(campusData.buildings[0]);
  const [selectedFloor, setSelectedFloor] = useState<Floor>(campusData.buildings[0].floors[0]);

  const handleBuildingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const building = campusData.buildings.find(b => b.id === e.target.value);
    if (building) {
      setSelectedBuilding(building);
      setSelectedFloor(building.floors[0]);
    }
  };

  const handleFloorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const floor = selectedBuilding.floors.find(
      f => f.level === parseInt(e.target.value)
    );
    if (floor) setSelectedFloor(floor);
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Campus Map</h2>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <Select
            label="Building"
            value={selectedBuilding.id}
            onChange={handleBuildingChange}
          >
            {campusData.buildings.map(building => (
              <option key={building.id} value={building.id}>
                {building.name}
              </option>
            ))}
          </Select>

          <Select
            label="Floor"
            value={selectedFloor.level}
            onChange={handleFloorChange}
          >
            {selectedBuilding.floors.map(floor => (
              <option key={floor.level} value={floor.level}>
                Floor {floor.level}
              </option>
            ))}
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {selectedFloor.rooms.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        <div className="mt-6 pt-6 border-t">
          <MapLegend />
        </div>
      </div>
    </div>
  );
}