import { Component, OnInit, Input } from '@angular/core';
import { MovieReview } from '../../models/movie-review';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-icon',
  templateUrl: './movie-icon.component.html',
  styleUrls: ['./movie-icon.component.css']
})
export class MovieIconComponent implements OnInit {

  @Input() Imdb: MovieReview;

  public film: Movie;
  private errorMessage: string;
  private temp: Movie;
  // Image:string = "https://www.image.ie/images/no-image.png";

  constructor(private _movieService: MovieService) {

  }

  getMovie(){
    console.log("Movie searched by ID ==> " + this.Imdb.imdbId);
    let self = this;

    if (this.Imdb.imdbId != "") {
      self._movieService.getMovieID(this.Imdb.imdbId).subscribe(response => this.film = response, error => this.errorMessage = <any>error);
      // this.searchBool = true;
      // this.validMovie = true;
      // return false;
      // console.log("Poster: " + this.film.Poster);
    } 
    else
      console.log("No movie!");
  }

  getImageURL(x):string {
    let self = this;
    if (this.Imdb.imdbId != ""){
      self._movieService.getMovieID(this.Imdb.imdbId).subscribe(response => this.temp = response, error => this.errorMessage = <any>error);
    }
    return this.temp.Poster;
  }

  ngOnInit() {
    console.log("ID Passed in: " + this.Imdb.imdbId);
    this.getMovie();
  }

}
