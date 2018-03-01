import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CustomApiService } from '../../services/custom-api.service';
import { Movie } from '../../models/movie';
import { MovieReview } from '../../models/movie-review';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-new-movie-review',
  providers: [MovieService, CustomApiService],
  templateUrl: './new-movie-review.component.html',
  styleUrls: ['./new-movie-review.component.css']
})
export class NewMovieReviewComponent implements OnInit {

  public divShow: boolean = false;
  public searchBool: boolean = false;
  public validMovie: boolean = false;
  public popupShow: boolean = false;
  resultUser: boolean = false;

  film: Movie;
  filmReviews: MovieReview;
  filmReviewBool: boolean = false;

  errorMessage: string;
  movieName: string;

  selMovieTitle: string;
  selMovieID: string;
  selMoviePrice: string;

  constructor(
    private _movieService: MovieService, 
    private _customApiService: CustomApiService) { }


  callCustomAPI(movId) {
    let self = this; // getReviews(movId) *****
    self._customApiService.getReviews(movId)
      .subscribe(response => this.filmReviews = response, error => this.errorMessage = <any>error);
    console.log("***** Method finished. movId: " + movId);
    this.filmReviewBool = true;
    // console.log("*** Comment: " + this.filmReviews.reviewComment);
  }


  newFilmReview: MovieReview; 
  submitReview(comment) {
    this.newFilmReview = new MovieReview(10, 10,this.film.imdbID, comment, null, 5);

    // this._customApiService.createReview(this.newFilmReview);

      this._customApiService.createReview(this.newFilmReview)
          .subscribe(
              data => {
                  console.log("Subscribe Finished");
              },
              error => {
                  console.log("Subscribe Error!");
              });

    console.log(comment + " recorded.");
  }

  // callCustomAPI_ID(movId) {
  //   let self = this; // getReviews(movId) *****
  //   self._customApiService.getReviewID(movId)
  //     .subscribe(response => this.filmReviews = response, error => this.errorMessage = <any>error);
  //   console.log("***** Method finished. movId: " + movId);
  //   this.filmReviewBool = true;
  //   // console.log("*** Comment: " + this.filmReviews.reviewComment);
  // }

  movieSelected(title, id) {
    this.selMovieTitle = title;
    this.selMovieID = id;
    this.popupShow = true;
    console.log("Movie: " + this.selMovieTitle + " - imdbID: " + this.selMovieID);

    this.callCustomAPI(this.selMovieID);
  }

  closePopup() {
    this.popupShow = false;
  }

  findMovieStart(x) {
    this.movieName = x;
    console.log("Movie searched ==> " + this.movieName);
    let self = this;

    if (this.movieName != "") {
      self._movieService.getMovies(this.movieName).subscribe(response => this.film = response, error => this.errorMessage = <any>error);
      this.searchBool = true;
      this.validMovie = true;
      return false;
    } 
    else
      console.log("No movie!");
  }

  ngOnInit(): void { }

}
