import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'newreview', component: NewMovieReviewComponent},
  { path: 'moviereview', component: MovieReviewComponent}

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
    MovieReviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
