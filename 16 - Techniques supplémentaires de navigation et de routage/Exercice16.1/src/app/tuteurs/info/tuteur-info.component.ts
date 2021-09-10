import { Component, OnInit } from '@angular/core';
import { Ituteur } from '../tuteur-list/tuteur';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tuteur-info',
  templateUrl: './tuteur-info.component.html',
  styleUrls: ['./tuteur-info.component.css']
})
export class TuteurInfoComponent implements OnInit {
  pageTitle:  'tutor info';
  tutors: Ituteur;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.tutors = {
      'tuteurId': id,
      'firstName': 'Adam',
      'lastName': 'AKRAMAN',
      'age': 30,
      'adress': 'March 19, 2016',
      'imageUrl': 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1'
    };
  }

  onBack(): void {
    this.router.navigate(['/tutors']);
  }

}
