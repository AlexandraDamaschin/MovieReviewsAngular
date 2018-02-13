import { Component, OnInit } from '@angular/core';
import { MovieDetails } from '../movie-details/movie-details.model';
import { Movie } from '../movie-details/movie';

@Component({
  selector: 'app-reviewed-movie-list',
  templateUrl: './reviewed-movie-list.component.html',
  styleUrls: ['./reviewed-movie-list.component.css']
})
export class ReviewedMovieListComponent implements OnInit {

  ReviewedMovies: MovieDetails[];
  Movies: Movie[];
  film: Movie;
  
  errorMessage: string;
  movieID: string;

  constructor() { 

    this.ReviewedMovies = [
      new MovieDetails('tt1856101','$39'),
      new MovieDetails('tt0083658','$45')
    ];

  }

  ngOnInit() {
  }

}
