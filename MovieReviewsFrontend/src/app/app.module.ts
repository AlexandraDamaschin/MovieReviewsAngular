import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NewMovieReviewComponent } from './new-movie-review/new-movie-review.component';
import { ReviewCommentLineComponent } from './review-comment-line/review-comment-line.component';
import { UserServiceService } from '../services/user.registration.service';
import { ConfigService } from '../services/config.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';

// Routes
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Http - Forms
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Social
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { FacebookModule } from 'ngx-facebook';

// Toaster Notifications
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'newreview', component: NewMovieReviewComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', redirectTo: 'login', pathMatch: 'full'},
  { path: 'profile', component: UserInfoComponent}
]

// Config Services for Social Login
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("264892006191-masj6pnimfpcu6bm4a8akhe1ndp6ijn2.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2125829164311732")
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NewMovieReviewComponent,
    HomeComponent,
    LoginComponent,
    UserInfoComponent,
    ReviewCommentLineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SocialLoginModule.initialize(config),
    HttpModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [
    ConfigService,
    UserServiceService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
