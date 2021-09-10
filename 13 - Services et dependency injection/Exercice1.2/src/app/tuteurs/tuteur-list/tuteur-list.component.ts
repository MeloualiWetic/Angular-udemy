import { Component, OnInit } from '@angular/core';
import { TuteurService } from './tuteur.service';
import { Ituteur } from './tuteur';


@Component({
  selector: 'app-tuteur-list',
  templateUrl: './tuteur-list.component.html',
  styleUrls: ['./tuteur-list.component.css']
})
export class TuteurListComponent implements OnInit {
  pageTitle = 'Tutors List';
  // tslint:disable-next-line:no-inferrable-types
  imageWidth: number = 50;
  // tslint:disable-next-line:no-inferrable-types
  imageMargin: number =  2;
  showImage = false;
  tutors: Ituteur[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  constructor(private tuteurService: TuteurService) { }

  ngOnInit() {
    this.tutors = this.tuteurService.getTutors();
  }
}
