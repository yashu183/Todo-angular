import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { AddNoteComponent } from './addNote/add-note/add-note.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatusComponent } from './status/status.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    ToDoFormComponent,
    NavComponent,
    AddNoteComponent,
    ViewTasksComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": true,
      "startFromZero": true,
      "showSubtitle" : false,
      "lazy": true}),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
