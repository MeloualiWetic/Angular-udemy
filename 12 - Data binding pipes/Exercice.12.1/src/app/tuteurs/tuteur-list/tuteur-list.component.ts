import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuteur-list',
  templateUrl: './tuteur-list.component.html',
  styleUrls: ['./tuteur-list.component.css']
})
export class TuteurListComponent implements OnInit {
  pageTitle = 'Tutors List';
  imageWidth: number = 50;
  imageMargin: number =  2;
  showImage = false;
  tutors: any[] = [
    {
      'firstName': 'Adam',
      'lastName': 'Garden',
      'age': 30,
      'adress': 'March 18, 2016',
      'imageUrl': 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1'
    },
    {
      'firstName': 'Lina',
      'lastName': 'Garden ',
      'age': 30,
      'adress': 'March 18, 2016',
      'imageUrl': 'https://www.assurance-info.ch/wp-content/uploads/2018/07/person-girl-flat.png'
    }
  ];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  constructor() { }

  ngOnInit() {
  }
}
