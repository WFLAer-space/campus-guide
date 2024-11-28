export interface Room {
  id: string;
  number: string;
  name: string;
  type: 'classroom' | 'office' | 'laboratory' | 'restroom' | 'stairs' | 'elevator';
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Floor {
  id: string;
  level: number;
  name: string;
  rooms: Room[];
}

export interface Building {
  id: string;
  name: string;
  floors: Floor[];
}