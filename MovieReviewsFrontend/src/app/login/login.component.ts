/*import { Component, OnInit } from '@angular/core';
import {  } from '../../services/user-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginShow: boolean = true;
  
  constructor() { }

  login(username, password){
    console.log("username --> " + username + " . password --> " + password);
    return false; // Remove this for successful submit, this is here for dev only.
    
  }

  forgotPassword() {
    console.log("Forgot Password");
  }


  register() {
    if(!this.loginShow) {
      // Register code goes inside this IF
      console.log("Register");
    }
    this.loginShow = false;
  }

  formSubmit() {
    console.log("formSubmit");
  }


  backToLogin() {
    this.loginShow = true;
  }


  socialLogin(x) {
    if(x == "google") {
      console.log("Google Login");
    } 
    else if (x == "fb") {
      console.log("Facebook Login");
    } 
    else if (x == "github") {
      console.log("Github Login");
    } 
    else if (x == "twitter") {
      console.log("Twitter Login");
    }
  }

  ngOnInit(){ }
}
*/

import { Subscription } from 'rxjs';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Credentials } from '../../models/credentials';
import { UserServiceService } from '../../services/user-service.service';


import { tokenNotExpired } from 'angular2-jwt';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  credentials: Credentials = { email: '', password: '' };
  email: string;
  password: string;

  authToken: any;
  user: any;

  constructor(private userService: UserServiceService, private router: Router,private activatedRoute: ActivatedRoute) { }

    ngOnInit() {

    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
         this.brandNew = param['brandNew'];   
         this.credentials.email = param['email'];         
      });      
  }

   ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  login({ value, valid }: { value: Credentials, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors='';
    if (valid) {
      this.userService.login(value.email, value.password)
        .finally(() => this.isRequesting = false)
        .subscribe(
        result => {         
          if (result) {
             this.router.navigate(['/dashboard/home']);             
          }
        },
        error => this.errors = error);
    }
  }

    //store data of users as JSON
    storeUserData(token, email, password) {
      localStorage.setItem('auth_token', token);
      localStorage.setItem('email', JSON.stringify(this.credentials.email));
      localStorage.setItem('password', JSON.stringify(this.credentials.password));
      this.authToken = token;
      this.email = email;
      this.password = password;
    }
  
    //store token
    loadToken() {
      const token = localStorage.getItem('auth_token');
      this.authToken = token;
    }
  
    //store token for keep user loggin for certain amount of time
    loggedIn() {
      return tokenNotExpired('auth_token');
    }
  
    //clear local storage -> logout
    logout() {
      this.authToken = null;
      this.user = null;
      localStorage.clear();
    }
  
}