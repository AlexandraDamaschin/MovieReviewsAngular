
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
import { SocialUser } from 'angular4-social-login/entities';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Credentials } from '../../models/credentials';
import { UserServiceService } from '../../services/user-service.service';

import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
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
  credentials: Credentials = { email: '', password: '', ConfirmPassword: '' };
  email: string;
  password: string;
  ConfirmPassword: string;

  authToken: any;
  user: any;
  User: SocialUser;
  LoggedIn: boolean;
  constructor(
    private userService: UserServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(){
    this.authService.authState.subscribe((User) => {
    this.User = User;
    this.LoggedIn = (User != null);}) ;

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
    this.errors = '';
    if (valid) {
      this.userService.login(value.email, value.password, value.ConfirmPassword)
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

  

  //google login
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log("signInWithGoogle");
  }

  //fb login
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    console.log("signInWithFB");
  }



  //store data of users  as JSON
  storeUserData(token, email, password, ConfirmPassword) {
    localStorage.setItem('auth_token', token);
    console.log(token);
    localStorage.setItem('email', JSON.stringify(this.credentials.email));
    console.log(JSON.stringify(this.credentials.email));
    localStorage.setItem('password', JSON.stringify(this.credentials.password));
    console.log(JSON.stringify(this.credentials.password));
    localStorage.setItem('ConfirmPassword', JSON.stringify(this.credentials.ConfirmPassword));
    console.log(JSON.stringify(this.credentials.ConfirmPassword));
    this.authToken = token;
    this.email = email;
    this.password = password;
    this.ConfirmPassword = ConfirmPassword;
  }

  //store token
  loadToken() {
    const token = localStorage.getItem('auth_token');
    this.authToken = token;
  }

  //store token for keeping a user logged in for a certain amount of time
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