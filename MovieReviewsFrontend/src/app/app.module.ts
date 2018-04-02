import { UserServiceService } from '../services/user-service.service';
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
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ConfigService } from '../services/config.service';


import {  XHRBackend } from '@angular/http';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'newreview', component: NewMovieReviewComponent},
  { path: 'moviereview', component: MovieReviewComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
]

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
    RegisterComponent,
  
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FacebookModule.forRoot(),
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ConfigService,UserServiceService, { 
    provide:   XHRBackend,
    useClass: AuthenticateXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
