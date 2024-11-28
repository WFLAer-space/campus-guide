export function getRoomColor(type: string): string {
  switch (type) {
    case 'classroom':
      return '#fbd38d';  // Warm orange for classrooms
    case 'office':
      return '#9ae6b4';  // Green for offices
    case 'laboratory':
      return '#90cdf4';  // Blue for labs
    case 'restroom':
      return '#e9d8fd';  // Purple for restrooms
    case 'stairs':
      return '#cbd5e0';  // Gray for stairs
    case 'elevator':
      return '#a0aec0';  // Dark gray for elevators
    default:
      return '#edf2f7';  // Light gray default
  }
}

export function getRoomSize(type: string): { width: number; height: number } {
  switch (type) {
    case 'classroom':
      return { width: 100, height: 80 };
    case 'restroom':
      return { width: 60, height: 60 };
    case 'stairs':
      return { width: 40, height: 40 };
    default:
      return { width: 80, height: 60 };
  }
}