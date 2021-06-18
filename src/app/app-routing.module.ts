import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddNoteComponent } from './addNote/add-note/add-note.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';

const routes: Routes = [
  { path : 'edit', component : AddNoteComponent },
  { path : 'view', component : ViewTasksComponent },
  { path : '', component : AddNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
