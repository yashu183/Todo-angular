import { Component, OnInit } from '@angular/core';

import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';

import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

Amplify.configure({
  Auth:{
    //region: 'us-east-2',
    //userPoolId : 'us-east-1_DKMoeHzzJ',
    //userPoolWebClientId : '1tm484hfufb29pp658k41e1pll',
    region : 'us-east-1',
    userPoolId : 'us-east-1_lApQ0VkeX',
    userPoolWebClientId : '49bc90b404qofm7eh2d0fiqoa2'
  }
});

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginForm = {
    username : '',
    password : ''
  }

  constructor(private route : Router, private dataService : DataService) { }

  ngOnInit(): void {
  }
  

  loginFun(){
    console.log("inisde loginfun......");
    console.log(this.loginForm.username + " " + this.loginForm.password);
    Auth.signIn(this.loginForm.username, this.loginForm.password).then(usr => {
      console.log("inside promise");
      console.log(usr.challengeName);
      if(usr.challengeName === 'NEW_PASSWORD_REQUIRED'){
        console.log("inisde if");
        this.route.navigate(['/changePassword']);
      }
      else{
        this.dataService.loggedSuccessfully(this.loginForm.username);
        this.route.navigate(['/addtask']);
      }
    }).catch(error => {
      console.log(error);
    });
  }
}
