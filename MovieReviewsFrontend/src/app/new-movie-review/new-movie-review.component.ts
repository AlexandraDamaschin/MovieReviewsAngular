import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie-details/movie';

@Component({
  selector: 'app-new-movie-review',
  templateUrl: './new-movie-review.component.html',
  styleUrls: ['./new-movie-review.component.css']
})
export class NewMovieReviewComponent implements OnInit {
  
  // public divShow: boolean = false;
  // public searchBool: boolean = false;
  // public validMovie: boolean = false;
  // resultUser: boolean = false;

  // title = 'Movie List';
  // film: Movie;
  // errorMessage: string;
  movieName: string;

  // selMovieTitle: string;
  // selMovieID: string;
  // selMoviePrice: string;

  // constructor(private _movieService: MovieService) {

  //  }
  constructor(){}

  // movieSelected(smt, id, price) {
  //   this.selMovieTitle = smt;
  //   this.selMovieID = id;
  //   this.selMoviePrice = price;


  //   if(this.selMoviePrice != "") {
  //     console.log("Movie: " + this.selMovieTitle + " - imdbID: " + this.selMovieID + " - Price: " + this.selMoviePrice);
  //     this.divShow = !this.divShow;
  //     alert("Movie - " + this.film.Title + " \nimdbID - " + this.film.imdbID + " \nPrice - " + this.selMoviePrice);
  //   }
  // }

  // toggleDisplay() {
  //   this.divShow = !this.divShow;
  // }

  findMovieStart(x) {
    // this.movieName = x;
    // console.log("Movie searched ==> " + this.movieName);
    // let self = this;

    // if(this.movieName != "") {
    //   self._movieService.getMovies(this.movieName).subscribe(response => this.film = response, error => this.errorMessage = <any> error);
    //   this.searchBool = true;
    //   this.validMovie = true;
    // } else 
    //   console.log("No movie!");
    console.log("Search clicked..");
  }

  ngOnInit(): void {   }

}
