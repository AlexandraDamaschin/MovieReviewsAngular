import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import { StringList } from '../../services/strings';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public user: SocialUser;
  public loggedIn: boolean;


  constructor(private authService: AuthService, private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }

   logout(){
    this.authService.signOut();
    this.router.navigate(['login']);
    // Doest get displayed
    this.toastr.info('You have logged out', null, {toastLife: 2000});
   }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

}
