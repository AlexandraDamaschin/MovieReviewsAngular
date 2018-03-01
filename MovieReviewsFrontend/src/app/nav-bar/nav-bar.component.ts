import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import { UserInfoComponent } from '../user-info/user-info.component';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) { 

  }

  loginLogout(){
    if(this.loggedIn) { // If logged in, signOut and go home
      this.authService.signOut();
      this.router.navigate(['']);
    } 
    else { // If not logged in, go to login page
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null); // Checks if logged in

      if(this.loggedIn)
        this.router.navigate(['']);
    });
  }


}
