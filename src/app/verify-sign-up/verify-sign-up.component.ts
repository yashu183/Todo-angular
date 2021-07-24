import { Component, OnInit } from '@angular/core';

import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';


@Component({
  selector: 'app-verify-sign-up',
  templateUrl: './verify-sign-up.component.html',
  styleUrls: ['./verify-sign-up.component.css']
})
export class VerifySignUpComponent implements OnInit {
  
  verifyForm = {
    username : '',
    code : ''
  }

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  
  verifyFun(){
    async function confirmSignUp(this : any) {
      try {
        await Auth.confirmSignUp(this.verifyForm.username, this.verifyForm.code);
        
      } catch (error) {
          console.log('error confirming sign up', error);
      }
  }
  }

}
