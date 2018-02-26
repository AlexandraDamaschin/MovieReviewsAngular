import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  formSubmit() {
    console.log("formSubmit");

  }

  socialLogin() {
    console.log("socialLogin");
  }
}
