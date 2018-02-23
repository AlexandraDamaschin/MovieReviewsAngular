import { Component, OnInit, Input } from '@angular/core';
import { MovieReview } from '../../models/movie-review';

@Component({
  selector: 'app-movie-icon',
  templateUrl: './movie-icon.component.html',
  styleUrls: ['./movie-icon.component.css']
})
export class MovieIconComponent implements OnInit {

  @Input() Imdb: MovieReview;
  Image:string = "https://www.image.ie/images/no-image.png";

  constructor() { }

  ngOnInit() {
  }

}
