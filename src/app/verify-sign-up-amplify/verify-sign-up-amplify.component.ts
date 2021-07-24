import { Component, OnInit } from '@angular/core';

import { Auth } from 'aws-amplify';

import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-sign-up-amplify',
  templateUrl: './verify-sign-up-amplify.component.html',
  styleUrls: ['./verify-sign-up-amplify.component.css']
})
export class VerifySignUpAmplifyComponent implements OnInit {
  
  verifyFormAmplify = {
    username : '',
    code : '',
  }

  isError:boolean = false;

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  verifyAmplify(){
    console.log("inside verify amplify");
      try {
        Auth.confirmSignUp(this.verifyFormAmplify.username, this.verifyFormAmplify.code);
        this.route.navigate(['']);
      } catch (error) {
          console.log('error confirming sign up', error);
    }
  }

}
