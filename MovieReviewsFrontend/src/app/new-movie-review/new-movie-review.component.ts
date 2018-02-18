import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-new-movie-review',
  providers: [MovieService],
  templateUrl: './new-movie-review.component.html',
  styleUrls: ['./new-movie-review.component.css']
})
export class NewMovieReviewComponent implements OnInit {
  
  public divShow: boolean = false;
  public searchBool: boolean = false;
  public validMovie: boolean = false;
  public popupShow: boolean = false;
  resultUser: boolean = false;

  // title = 'Movie List';
  film: Movie;
  errorMessage: string;
  movieName: string;

  selMovieTitle: string;
  selMovieID: string;
  selMoviePrice: string;

  constructor(private _movieService: MovieService) {

   }
  // constructor(){}

  movieSelected(smt, id) {
    this.selMovieTitle = smt;
    this.selMovieID = id;

    this.popupShow = true;

    console.log("Movie: " + this.selMovieTitle + " - imdbID: " + this.selMovieID);
    // this.divShow = !this.divShow;
    // alert("Movie - " + this.film.Title + " \nimdbID - " + this.film.imdbID);
  }

  // toggleDisplay() {
  //   this.divShow = !this.divShow;  
  // }

  closePopup() {
    this.popupShow = false;

  }

  findMovieStart(x) {
    this.movieName = x;
    console.log("Movie searched ==> " + this.movieName);
    let self = this;

    if(this.movieName != "") {
      self._movieService.getMovies(this.movieName).subscribe(response => this.film = response, error => this.errorMessage = <any> error);
      this.searchBool = true;
      this.validMovie = true;
      return false;
    } else 
      console.log("No movie!");

    // console.log("Search clicked.. --> " + x);
  }

  ngOnInit(): void {   }

}
