import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserRegistration } from '../../services/user.registration';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;

  constructor(
    private userService: UserServiceService,
    private router: Router) {
  }


  ngOnInit() {
  }

  registerUser({ value, valid }: { value: UserRegistration, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.userService.register(value.email, value.password, value.ConfirmedPassword, value.username)
        .finally(() => this.isRequesting = false)
        .subscribe(
          result => {
            if (result) {
              this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
            }
          },
          errors => this.errors = errors);
    }
  }
}
