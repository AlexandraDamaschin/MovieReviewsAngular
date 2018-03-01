import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginShow: boolean = true;

  constructor( private authService: AuthService, public toastr: ToastsManager, vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() { 
    // this.toastr.info('You are logged out', null, {toastLife: 2000});
  }

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


  register() {
    if (!this.loginShow) {
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


}
