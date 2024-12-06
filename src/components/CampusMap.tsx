import React, { useState } from 'react';
import { RoomCard } from './map/RoomCard';
import { MapLegend } from './map/MapLegend';
import { BuildingSelector } from './map/BuildingSelector';
import campusData from '../data/campusData.json';
import type { Building, Floor } from '../types/campus';

export function CampusMap() {
  const [selectedBuilding, setSelectedBuilding] = useState<Building>(campusData.buildings[0]);
  const [selectedFloor, setSelectedFloor] = useState<Floor>(campusData.buildings[0].floors[0]);

  const handleBuildingChange = (building: Building) => {
    setSelectedBuilding(building);
    setSelectedFloor(building.floors[0]);
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Campus Map</h2>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <BuildingSelector
          buildings={campusData.buildings}
          selectedBuilding={selectedBuilding}
          selectedFloor={selectedFloor}
          onBuildingChange={handleBuildingChange}
          onFloorChange={setSelectedFloor}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
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