import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CustomApiService } from '../../services/custom-api.service';
import { Movie } from '../../models/movie';
import { MovieReview } from '../../models/movie-review';
import { HttpModule, Http } from '@angular/http';
import { MovieIconComponent } from '../movie-icon/movie-icon.component';
import { StringList } from '../../services/strings';

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

  reviewedMovies: MovieReview;
  // reviewedMoviesDistinct: MovieReview;

  movieReviews: string[];

  errorMessage: string;
  movieName: string;

  selMovieTitle: string;
  selMovieID: string;
  selMoviePrice: string;

  constructor(
    private _movieService: MovieService, 
    private _customApiService: CustomApiService,
  private http: Http) { }


  // reviewSubmit(review: MovieReview) {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');

  //   let url = `${StringList.CUSTOM_API_BASE}/${review.imdbId}`;

  //   return this.http
  //             .put(url, JSON.stringify(review), {headers: headers}) //???
  //             .map(res => res.json());

  // }

  callCustomAPI(movId) {
    let self = this;
    self._customApiService.getReviewsByID(movId)
      .subscribe(response => this.filmReviews = response, error => this.errorMessage = <any>error);
    console.log("***** Method finished. movId: " + movId);
    this.filmReviewBool = true;
  }

  callCustomAPI_List() {
    let self = this;
    self._customApiService.getReviews()
      .subscribe(response => this.reviewedMovies = response, error => this.errorMessage = <any>error);
    console.log("***** Method finished. *****");
    this.filmReviewBool = true;
  }


  movieSelected(title, id) {
    this.selMovieTitle = title;
    this.selMovieID = id;
    this.popupShow = true;
    console.log("Movie: " + this.selMovieTitle + " - imdbID: " + this.selMovieID);

    this.callCustomAPI(this.selMovieID);
  }

  testClick1(x){
    console.log(x);
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
