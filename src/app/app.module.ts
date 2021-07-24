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
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SignupComponent } from './signup/signup.component';
import { VerifySignUpComponent } from './verify-sign-up/verify-sign-up.component';

import  Amplify  from 'aws-amplify';

import { LoginAmplifyComponent } from './login-amplify/login-amplify.component';
import { LogoutAmplifyComponent } from './logout-amplify/logout-amplify.component';
import { SignupAmplifyComponent } from './signup-amplify/signup-amplify.component';
import { ChangepassAmplifyComponent } from './changepass-amplify/changepass-amplify.component';
import { VerifySignUpAmplifyComponent } from './verify-sign-up-amplify/verify-sign-up-amplify.component';

Amplify.configure({
  "aws_project_region": "us-east-1",
  "aws_cognito_identity_pool_id": "us-east-1:520e0eb0-e6b5-4c19-8e32-1ad581200337",
  "aws_cognito_region": "us-east-1",
  "aws_user_pools_id": "us-east-1_lApQ0VkeX",
  "aws_user_pools_web_client_id": "49bc90b404qofm7eh2d0fiqoa2",
  "oauth": {
      "domain": "todof1b5ba45-f1b5ba45-dev.auth.us-east-1.amazoncognito.com",
      "scope": [
          "phone",
          "email",
          "openid",
          "profile",
          "aws.cognito.signin.user.admin"
      ],
      "redirectSignIn": "http://localhost:4200/",
      "redirectSignOut": "http://localhost:4200/",
      "responseType": "code"
  },
  "federationTarget": "COGNITO_USER_POOLS"
})

@NgModule({
  declarations: [
    AppComponent,
    ToDoFormComponent,
    NavComponent,
    AddNoteComponent,
    ViewTasksComponent,
    StatusComponent,
    LoginComponent,
    ChangePasswordComponent,
    SignupComponent,
    VerifySignUpComponent,
    LoginAmplifyComponent,
    LogoutAmplifyComponent,
    SignupAmplifyComponent,
    ChangepassAmplifyComponent,
    VerifySignUpAmplifyComponent
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
