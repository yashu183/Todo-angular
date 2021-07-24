import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddNoteComponent } from './addNote/add-note/add-note.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { StatusComponent } from './status/status.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SignupComponent } from './signup/signup.component';
import { VerifySignUpComponent } from './verify-sign-up/verify-sign-up.component';

//Amplify module components
import { LoginAmplifyComponent } from './login-amplify/login-amplify.component';
import { SignupAmplifyComponent } from './signup-amplify/signup-amplify.component';
import { VerifySignUpAmplifyComponent } from './verify-sign-up-amplify/verify-sign-up-amplify.component';

const routes: Routes = [
  { path : 'edit', component : AddNoteComponent },
  { path : 'view', component : ViewTasksComponent },
  { path : 'addtask', component : AddNoteComponent },
  { path : 'status', component : StatusComponent  },
  //{ path : '', component : LoginComponent }, //normal amplify
  { path : '', component : LoginAmplifyComponent }, //amplify init
  { path : 'changePassword', component : ChangePasswordComponent },
  { path : 'signup', component : SignupComponent}, //normal amplify
  { path : 'signupAmplify', component : SignupAmplifyComponent },
  { path : 'verify', component : VerifySignUpComponent }, //normal amplify
  { path : 'confirmSignUpAmplify', component : VerifySignUpAmplifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]   
})
export class AppRoutingModule { }
