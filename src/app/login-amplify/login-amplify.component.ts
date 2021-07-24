import { Component, OnInit } from '@angular/core';

import { Auth } from 'aws-amplify';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login-amplify',
  templateUrl: './login-amplify.component.html',
  styleUrls: ['./login-amplify.component.css']
})
export class LoginAmplifyComponent implements OnInit {
  
  isError:boolean = false;

  loginFormAmplify = {
    username : '',
    password : ''
  }

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  loginAmplify(){
      try {
          const user =  Auth.signIn(this.loginFormAmplify.username, this.loginFormAmplify.password).then(usr => {
            if(usr.challengeName === 'NEW_PASSWORD_REQUIRED'){
              this.route.navigate(['/changePassAmplify']);
            }
            else if(usr.code === 'NotAuthorizedException'){
              this.isError = true;
              this.route.navigate(['']);
            }
            else{
              this.route.navigate(['/addtask']);
            }
          }).catch(err => {
            if(err.code == 'NotAuthorizedException'){
              this.isError = true;
              this.route.navigate(['']);
            }
          });
          console.log('user', user);
      } catch (error) {
          this.isError = true;
          console.log('error signing in', error);
          this.route.navigate(['']);
      }
  }

}
