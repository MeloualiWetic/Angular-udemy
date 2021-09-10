import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuteur-list',
  templateUrl: './tuteur-list.component.html',
  styleUrls: ['./tuteur-list.component.css']
})
export class TuteurListComponent implements OnInit {
  pageTitle = 'Tutors List';
  tutors: any[] = [
    {
      'firstName': 'Adam',
      'lastName': 'Garden',
      'age': 30,
      'adress': 'March 18, 2016',
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    },
    {
      'firstName': 'Lina',
      'lastName': 'Garden ',
      'age': 30,
      'adress': 'March 18, 2016',
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
