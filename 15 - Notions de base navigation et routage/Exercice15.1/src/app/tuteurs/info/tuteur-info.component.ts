import { Component, OnInit } from '@angular/core';
import { Ituteur } from '../tuteur-list/tuteur';

@Component({
  selector: 'app-tuteur-info',
  templateUrl: './tuteur-info.component.html',
  styleUrls: ['./tuteur-info.component.css']
})
export class TuteurInfoComponent implements OnInit {
  pageTitle:  'tutor info';
  tutors: Ituteur;
  constructor() { }

  ngOnInit() {
  }

}
