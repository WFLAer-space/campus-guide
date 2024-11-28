import React, { useState } from 'react';
import { buildings } from './data/campusData';
import { Building, Floor, Room } from './types/campus';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { FloorPlan } from './components/FloorPlan';

export default function App() {
  const [selectedBuilding, setSelectedBuilding] = useState<Building>(buildings[0]);
  const [selectedFloor, setSelectedFloor] = useState<Floor>(buildings[0].floors[0]);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const handleBuildingChange = (building: Building) => {
    setSelectedBuilding(building);
    setSelectedFloor(building.floors[0]);
    setSelectedRoom(null);
  };

  const handleFloorChange = (floor: Floor) => {
    setSelectedFloor(floor);
    setSelectedRoom(null);
  };

  const handleRoomClick = (room: Room) => {
    setSelectedRoom(room);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Sidebar
              buildings={buildings}
              selectedBuilding={selectedBuilding}
              selectedFloor={selectedFloor}
              selectedRoom={selectedRoom}
              onBuildingChange={handleBuildingChange}
              onFloorChange={handleFloorChange}
            />
          </div>

          <div className="lg:col-span-3">
            <FloorPlan
              rooms={selectedFloor.rooms}
              onRoomClick={handleRoomClick}
            />
          </div>
        </div>
      </main>
    </div>
  );
}