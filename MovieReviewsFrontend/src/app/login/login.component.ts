import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { ToastsManager } from 'ng2-toastr';

import { Router } from '@angular/router';

import { UserRegistration } from '../../services/user.registration';
import { UserServiceService } from '../../services/user.registration.service';

// import { validate } from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Variables
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  loginShow: boolean = true;

  constructor( private authService: AuthService, 
    public toastr: ToastsManager, 
    vcr: ViewContainerRef,
    private userService: UserServiceService,
    private router: Router,) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() { 
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }

  // Login ***
  login(username, password) {
    console.log("username --> " + username + " . password --> " + password);
    return false; // Remove this for successful submit, this is here for dev only.
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

  //sign out
  signOut(): void {
    this.authService.signOut();
  }

  forgotPassword() {
    console.log("Forgot Password");
  }

  // Shows Registration form
  registerShow() {
    this.loginShow = false;
  }

  // Switches back to Login form
  backToLogin() {
    this.loginShow = true;
  }

  // Register ***
  // (FirstName, LastName, UserName, Email, Pass1, Pass2)
  register(fn, ln, un, em, p1, p2){
    if(p1 != p2) {
      alert("Passwords must match!");
      return false;
    }

    if (!this.loginShow) {
      // Register code goes inside this IF

    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';

      this.userService.register(em, p1, p2, un)
        .finally(() => this.isRequesting = false)
        .subscribe(
          result => {
            if (result) {
              this.router.navigate(['/login'], { queryParams: { brandNew: true, email: em } });
            }
          },
          errors => this.errors = errors);
    
      console.log("Register --> " + fn + " " + ln + " " + un + " " + em + " " + p1 + " " + p2 + " ");
    }
  }

  // Not necessary
  formSubmit() {
    console.log("formSubmit");
  }



  // Keiths Register function

  // registerUser({ value, valid }: { value: UserRegistration, valid: boolean }) {
  //   this.submitted = true;
  //   this.isRequesting = true;
  //   this.errors = '';

  //   if(value.password != value.ConfirmPassword) {
  //     alert("Passwords must match!");
  //     return false;
  //   }

  //   if (valid) {
  //     this.userService.register(value.email, value.password, value.ConfirmPassword, value.username)
  //       .finally(() => this.isRequesting = false)
  //       .subscribe(
  //         result => {
  //           if (result) {
  //             this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
  //           }
  //         },
  //         errors => this.errors = errors);
  //   }
  // }
}





