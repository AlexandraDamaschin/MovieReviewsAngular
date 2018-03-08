import { Component, OnInit, Input } from '@angular/core';
import { MovieReview } from '../../models/movie-review';

@Component({
  selector: 'app-review-comment-line',
  templateUrl: './review-comment-line.component.html',
  styleUrls: ['./review-comment-line.component.css']
})
export class ReviewCommentLineComponent implements OnInit {
@Input() review: MovieReview;

  constructor() { }

  ngOnInit() {
  }

}
