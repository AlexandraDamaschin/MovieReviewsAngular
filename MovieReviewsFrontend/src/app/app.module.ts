import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FacebookModule } from 'ngx-facebook';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewedMovieListComponent } from './reviewed-movie-list/reviewed-movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NewMovieReviewComponent } from './new-movie-review/new-movie-review.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//social login
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'newreview', component: NewMovieReviewComponent},
  { path: 'moviereview', component: MovieReviewComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
]

//config services
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
    ReviewedMovieListComponent,
    MovieDetailsComponent,
    NewMovieReviewComponent,
    HomeComponent,
    MovieReviewComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SocialLoginModule.initialize(config),
    HttpModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
