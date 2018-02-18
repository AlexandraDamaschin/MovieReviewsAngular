import { Component, OnInit, Input } from '@angular/core';
import { MovieDetails } from '../../models/movie-details.model';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() MovieDetails: MovieDetails;

  public searchBool: boolean = false;
  public validMovie: boolean = false;
  errorMessage: string;
  film: Movie;
  movieID: string;

  // constructor(private _movieService: MovieService) {}
  constructor() {}

  // findMovieStart(id){
  //   this.movieID = id;
  //   console.log("Movie searched ==> " + this.movieID);
  //   let self = this;  

  //   if(this.movieID != "") {
  //     self._movieService.getMovieID(this.movieID).subscribe(response => this.film = response, error => this.errorMessage = <any> error);    
  //     this.searchBool = true;
  //     this.validMovie = true;
  //   }
  //   else
  //     console.log("No movie!");
  // }

  ngOnInit() {
  }
}
