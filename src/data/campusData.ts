import { Building } from '../types/campus';

export const buildings: Building[] = [
  {
    id: 'main',
    name: 'Main Building',
    floors: [
      {
        id: 'main-4',
        level: 4,
        name: 'Fourth Floor',
        rooms: [
          {
            id: 'A401',
            number: 'A401',
            name: 'Classroom A401',
            type: 'classroom',
            x: 50,
            y: 400,
            width: 100,
            height: 80
          },
          {
            id: 'A402',
            number: 'A402',
            name: 'Classroom A402',
            type: 'classroom',
            x: 160,
            y: 400,
            width: 100,
            height: 80
          },
          {
            id: 'A403',
            number: 'A403',
            name: 'Classroom A403',
            type: 'classroom',
            x: 270,
            y: 400,
            width: 100,
            height: 80
          },
          {
            id: 'A404',
            number: 'A404',
            name: 'Classroom A404',
            type: 'classroom',
            x: 380,
            y: 400,
            width: 100,
            height: 80
          },
          {
            id: 'A405',
            number: 'A405',
            name: 'Classroom A405',
            type: 'classroom',
            x: 490,
            y: 400,
            width: 100,
            height: 80
          },
          {
            id: 'A406',
            number: 'A406',
            name: 'Classroom A406',
            type: 'classroom',
            x: 600,
            y: 400,
            width: 100,
            height: 80
          },
          {
            id: 'A407',
            number: 'A407',
            name: 'Classroom A407',
            type: 'classroom',
            x: 600,
            y: 200,
            width: 100,
            height: 80
          },
          {
            id: 'A408',
            number: 'A408',
            name: 'Classroom A408',
            type: 'classroom',
            x: 600,
            y: 110,
            width: 100,
            height: 80
          },
          {
            id: 'A409',
            number: 'A409',
            name: 'Classroom A409',
            type: 'classroom',
            x: 600,
            y: 20,
            width: 100,
            height: 80
          },
          {
            id: 'A410',
            number: 'A410',
            name: 'Classroom A410',
            type: 'classroom',
            x: 490,
            y: 20,
            width: 100,
            height: 80
          },
          {
            id: 'A411',
            number: 'A411',
            name: 'Classroom A411',
            type: 'classroom',
            x: 380,
            y: 20,
            width: 100,
            height: 80
          },
          {
            id: 'A412',
            number: 'A412',
            name: 'Classroom A412',
            type: 'classroom',
            x: 270,
            y: 20,
            width: 100,
            height: 80
          },
          {
            id: 'A413',
            number: 'A413',
            name: 'Classroom A413',
            type: 'classroom',
            x: 160,
            y: 20,
            width: 100,
            height: 80
          },
          {
            id: 'A414',
            number: 'A414',
            name: 'Classroom A414',
            type: 'classroom',
            x: 50,
            y: 20,
            width: 100,
            height: 80
          },
          {
            id: 'A415',
            number: 'A415',
            name: 'Classroom A415',
            type: 'classroom',
            x: 50,
            y: 20,
            width: 100,
            height: 80
          },
          {
            id: 'wc',
            number: 'WC',
            name: 'Restroom',
            type: 'restroom',
            x: 710,
            y: 20,
            width: 60,
            height: 60
          },
          {
            id: 'stairs-1',
            number: 'ST1',
            name: 'Main Stairwell',
            type: 'stairs',
            x: 20,
            y: 110,
            width: 40,
            height: 40
          },
          {
            id: 'stairs-2',
            number: 'ST2',
            name: 'Emergency Stairwell',
            type: 'stairs',
            x: 710,
            y: 450,
            width: 40,
            height: 40
          }
        ]
      }
    ]
  },
  {
    id: 'corner',
    name: 'Corner Building',
    floors: [
      {
        id: 'corner-1',
        level: 1,
        name: 'First Floor',
        rooms: []  // We can add the corner building rooms when needed
      }
    ]
  }
];
