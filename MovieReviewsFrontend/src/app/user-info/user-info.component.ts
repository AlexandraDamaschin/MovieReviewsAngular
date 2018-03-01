import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import { StringList } from '../../services/strings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public user: SocialUser;
  public loggedIn: boolean;


  constructor(private authService: AuthService, private router: Router) {
    // this.loggedIn = StringList.LOGGED_IN;
   }

   logout(){
    this.authService.signOut();
    this.router.navigate(['login']);
   }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

}
