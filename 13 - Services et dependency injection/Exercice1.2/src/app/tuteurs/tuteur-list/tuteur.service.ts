import { Injectable } from '@angular/core';
import { Ituteur } from './tuteur';

@Injectable({
  providedIn: 'root'
})
export class TuteurService {
  getTutors(): Ituteur[] {
    return [{
      'tuteurId': 1,
      'firstName': 'Adam',
      'lastName': 'Garden',
      'age': 30,
      'adress': 'March 18, 2016',
      'imageUrl': 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1'
    },
    {
      'tuteurId': 2,
      'firstName': 'Lina',
      'lastName': 'Garden ',
      'age': 30,
      'adress': 'March 18, 2016',
      'imageUrl': 'https://www.assurance-info.ch/wp-content/uploads/2018/07/person-girl-flat.png'
    }
    ];
  }

  constructor() { }
}
