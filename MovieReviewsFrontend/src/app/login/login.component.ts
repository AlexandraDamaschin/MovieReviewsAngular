import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginShow: boolean = true;

  constructor() { }

  formSubmit() {
    console.log("Form Submit");
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

  
  ngOnInit() { }
}
