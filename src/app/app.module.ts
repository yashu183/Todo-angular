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

@NgModule({
  declarations: [
    AppComponent,
    ToDoFormComponent,
    NavComponent,
    AddNoteComponent,
    ViewTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
