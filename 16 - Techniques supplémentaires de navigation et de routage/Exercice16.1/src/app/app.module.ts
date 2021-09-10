import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuteurListComponent } from './tuteurs/tuteur-list/tuteur-list.component';
import { WelcomComponent } from './Home/welcom.component';
import { TuteurInfoComponent } from './tuteurs/info/tuteur-info.component';
import { RouterModule } from '@angular/router';
import { TuteurInfoGuard } from './tuteurs/info/tuteur-info.guard';

@NgModule({
  declarations: [
    AppComponent,
    TuteurListComponent,
    WelcomComponent,
    TuteurInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'tutors', component: TuteurListComponent },
      { path: 'tutor/:id', canActivate: [ TuteurInfoGuard ], component: TuteurInfoComponent },
      { path: 'welcome', component: WelcomComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
