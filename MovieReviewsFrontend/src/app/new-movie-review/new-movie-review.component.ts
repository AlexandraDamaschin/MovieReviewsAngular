import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CustomApiService } from '../../services/custom-api.service';
import { Movie } from '../../models/movie';
import { MovieReview } from '../../models/movie-review';
import { HttpModule } from '@angular/http';
import { AuthService } from 'angular4-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-movie-review',
  providers: [MovieService, CustomApiService],
  templateUrl: './new-movie-review.component.html',
  styleUrls: ['./new-movie-review.component.css']
})
export class NewMovieReviewComponent implements OnInit {

  // Misc Vars
  errorMessage: string;
  public divShow: boolean = false;
  public searchBool: boolean = false;
  public validMovie: boolean = false;
  public popupShow: boolean = false;
  resultUser: boolean = false;

  // Film / Review Vars
  film: Movie;
  filmReviews: MovieReview;
  filmReviewsAll: MovieReview;
  filmReviewBool: boolean = false;
  newFilmReview: MovieReview; 

  // Movie Vars
  selMovieTitle: string;
  selMovieID: string;
  selMoviePrice: string;
  starCount: number = 4;
  movieName: string;

  // User Vars
  user: any;
  loggedIn: boolean;


  constructor(
      private _movieService: MovieService, 
      private _customApiService: CustomApiService,
      private authService: AuthService) {
        this.findMovieStart("brooklyn");
     }

     
  // TODO: return DISTINCT by ImdbId
  // Shows list of reviewed movies at the bottom of the Homepage
  showReviewedMovies(){
    let self = this;

    self._customApiService.getReviews('')
    .subscribe(response => this.filmReviewsAll = response, error => this.errorMessage = <any>error);
    
    console.log("***** Method finished. movId: " + "ALL");

    this.filmReviewBool = true;
  }


  // Gets review by ImdbID
  callCustomAPI(movId) {
    let self = this;

    self._customApiService.getReviews(movId)
    .subscribe(response => this.filmReviews = response, error => this.errorMessage = <any>error);

    console.log("***** Method finished. movId: " + movId);

    this.filmReviewBool = true;
  }

  

  // Submits new review for selected movie
  submitReview(comment, img) {
    if(comment == "")
      return false;

    //TODO: UserID, ReviewID??, Refresh New Comment
    this.newFilmReview = new MovieReview(10, 10, this.film.imdbID, comment, null, this.starCount, img);
    this.newFilmReview = new MovieReview(this.getRandomInt(1,99999), this.getRandomInt(1,99999), this.film.imdbID, comment, null, this.starCount, img);

    this._customApiService.createReview(this.newFilmReview)
    .subscribe(
      data => { console.log("Review Posted Successfully"); },
      error => { console.log("Review Post Error!"); });

    console.log(comment + " recorded for film: " + this.film.imdbID);

    this.popupShow = false;
    // Enable page scroll again
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    alert("Review submitted!");
  }

  // When movie is clicked on
  movieSelected(title, id) {
    this.selMovieTitle = title;
    this.selMovieID = id;
    this.popupShow = true;

    // Disable page scroll
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    console.log("Movie: " + this.selMovieTitle + " - imdbID: " + this.selMovieID);

    this.callCustomAPI(this.selMovieID);
  }

  // Star selector, ran everytime a star is clicked
  starCheck(x): void{
    console.log("Star: " + x);
    this.starCount = x;
  }

  // "X" clicked to close popup
  closePopup() {
    this.popupShow = false;
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }

  //get a random number for the review placeholder.
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Begin searching for movie (in OMDB, by Name)
  findMovieStart(name) {
    this.movieName = name;
    console.log("Movie searched ==> " + this.movieName);
    let self = this;

    if (this.movieName != ''){
      self._movieService.getMovies(this.movieName).subscribe(response => this.film = response, error => this.errorMessage = <any>error);
      this.searchBool = true;
      this.validMovie = true;
    }
    return false;
  }

  // When page loads
  ngOnInit(): void { 
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null); // Checks if logged in
    });
    this.showReviewedMovies();
  }
}
