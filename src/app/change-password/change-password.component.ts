import { Component, OnInit } from '@angular/core';

import Amplify, { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

Amplify.configure({
  Auth:{
    region: 'us-east-2',
    userPoolId : 'us-east-1_DKMoeHzzJ',
    userPoolWebClientId : '1tm484hfufb29pp658k41e1pll',
  }
});

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  
  changePassForm = {
    username : '',
    password : '',
    newpassword : ''
  }

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  
  changePass(){
    console.log("inisde change pass......");
    // Auth.currentAuthenticatedUser().then(usr => {
    //   console.log(usr);
    //   Auth.changePassword(usr, this.changePassForm.password, this.changePassForm.newpassword).then(data => {
    //     console.log("inside promise in change password");
    //     console.log(data);
    //     this.route.navigate(['/']);
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // });
    Auth.changePassword(this.changePassForm.username, this.changePassForm.password, this.changePassForm.newpassword).then(data => {
      console.log("inside promise in change password");
      console.log(data);
      this.route.navigate(['/']);
    }).catch(error => {
      console.log(error);
    });
  }

}
