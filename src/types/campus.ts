export interface Teacher {
  id: string;
  name: string;
  office: string;
  email: string;
  wechat: string;
  subject: string;
}

export interface Room {
  id: string;
  name?: string;
  type: 'classroom' | 'office' | 'laboratory' | 'other';
}

export interface Floor {
  level: number;
  rooms: Room[];
}

export interface Building {
  id: string;
  name: string;
  floors: Floor[];
}

export interface CampusData {
  teachers: Teacher[];
  buildings: Building[];
}