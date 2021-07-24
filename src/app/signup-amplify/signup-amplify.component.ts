import { Component, OnInit } from '@angular/core';

import { Auth } from 'aws-amplify';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-amplify',
  templateUrl: './signup-amplify.component.html',
  styleUrls: ['./signup-amplify.component.css']
})
export class SignupAmplifyComponent implements OnInit {

  signUpFormAmplify = {
    username : '',
    password : '',
    email : '',
    phonenum : ''
  }

  isError:boolean = false;

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  signUpAmplify(){
    console.log("iniside signup fun");
    console.log(this.signUpFormAmplify);
    //async function signUp(this : any) {
      try {
        Auth.signUp({
              username : this.signUpFormAmplify.username,
              password : this.signUpFormAmplify.password,
              attributes: {
                  email : this.signUpFormAmplify.email,          // optional
                  phone_number : this.signUpFormAmplify.phonenum,   // optional - E.164 number convention
              }
          }).then(usr => {
            if(usr.userConfirmed){
              this.route.navigate(['']);
            }
            else{
              this.isError = true;
              this.route.navigate(['/confirmSignUpAmplify']);
            }
          })
         // console.log(user);
      } catch (error) {
          this.isError = true;
          console.log('error signing up:', error);
          this.route.navigate(['/signupAmplify']);
      }
    //}
  }

}
