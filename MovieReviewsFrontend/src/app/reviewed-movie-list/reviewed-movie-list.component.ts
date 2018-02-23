import { Component, OnInit } from '@angular/core';
import { MovieDetails } from '../../models/movie-details.model';
import { Movie } from '../../models/movie';

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

  constructor() { }

  ngOnInit() { }

}
