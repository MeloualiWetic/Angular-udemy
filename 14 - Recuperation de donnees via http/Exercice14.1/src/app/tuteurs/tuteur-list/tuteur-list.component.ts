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
  errorMessage: string;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  constructor(private tuteurService: TuteurService) { }

  ngOnInit() {
     this.tuteurService.getTutors().subscribe(
      result => {
      this.tutors = result;
    },
    error => this.errorMessage = <any>error
  );
  }
}
