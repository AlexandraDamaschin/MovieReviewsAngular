import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // private user: SocialUser;
  // private loggedIn: boolean;
  // private show: boolean = true;

  constructor(private authService: AuthService, public toastr: ToastsManager, vcr: ViewContainerRef) { 
    // this.toastr.setRootViewContainerRef(vcr);

  }


  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null); // Checks if logged in

    //   if(this.loggedIn && this.show){
    //     this.toastr.success('Hello ' + user.firstName + '!', null, {toastLife: 2000});
    //     this.show = false;
    //   }
    // });
  }

}
