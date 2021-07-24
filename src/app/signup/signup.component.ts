import { Component, OnInit } from '@angular/core';

import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  signupform = {
    username : '',
    tempPass : '',
    phnum : '',
    email : '',
    preferdUserName : ''
  }

  usrname:string = this.signupform.username;

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  
  signupfun(){
    console.log("inside signup fun...."+ this.signupform);
    try {
        Auth.signUp({
        username : this.signupform.username,
        password : this.signupform.tempPass,
        attributes : {
          phone_number : this.signupform.phnum,
          email : this.signupform.email,
          preferred_username : this.signupform.preferdUserName,
          name : this.signupform.preferdUserName
        }
      });
      //console.log(user);
      this.route.navigate(['/verify']);
  } catch (error) {
      console.log('error signing up:', error);
  }
    //   async function signUp(this: any) {
    //     try {
    //         const { user } = await Auth.signUp({
    //           username : this.signupform.username,
    //           password : this.signupform.tempPass,
    //           attributes : {
    //             phone_number : this.signupform.phnum,
    //             email : this.signupform.email
    //           }
    //         });
    //         console.log(user);
    //         this.route.navigate(['/verify']);
    //     } catch (error) {
    //         console.log('error signing up:', error);
    //     }
    // }
  }
}
