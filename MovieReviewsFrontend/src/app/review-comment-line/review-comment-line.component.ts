import { Component, OnInit, Input } from '@angular/core';
import { MovieReview } from '../../models/movie-review';
import { MovieService } from '../../services/movie.service';
import { CustomApiService } from '../../services/custom-api.service';

@Component({
  selector: 'app-review-comment-line',
  templateUrl: './review-comment-line.component.html',
  styleUrls: ['./review-comment-line.component.css']
})
export class ReviewCommentLineComponent implements OnInit {
  @Input() review: MovieReview;
  @Input() loggedIn: boolean;

  newReview: MovieReview;
  public showEditor: boolean = false;
  public starCount: number;

  constructor(
    private _movieService: MovieService, 
    private _customApiService: CustomApiService,) { }


  editorToggle(val){
    if(!this.loggedIn) {
      alert("Please login to edit comment.");
      return false;
    }

    this.starCount = this.review.starRating;

    if(val == "T")
      this.showEditor = true;
    else
      this.showEditor = false;

    console.log("ShowEditor: " + this.showEditor);
  }

  starCheck(x){
    console.log("Star: " + x);
    this.starCount = x;
  }

  updateReview(reviewId, newComment) {
    if(newComment == "") 
      return false;

    //TODO: UserID, ReviewID??, Refresh New Comment
    this.newReview = new MovieReview(reviewId, this.review.userID, this.review.imdbId, newComment, null, this.starCount, this.review.imageUrl);

    this._customApiService.updateReview(this.newReview)
    .subscribe(
      data => { console.log("Review Posted Successfully"); },
      error => { console.log("Review Post Error!"); });

    console.log(newComment + " = New Comment.");

    this.showEditor = false;
    this.review.reviewComment = newComment;
    this.review.starRating = this.starCount;
  }


  ngOnInit() {
  }

}
