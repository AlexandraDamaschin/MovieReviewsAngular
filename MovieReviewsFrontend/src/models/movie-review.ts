export class MovieReview {
    reviewId: number;
    userId: number;
    imdbId: string;
    reviewComment: string;
    dateCreated: DateTimeFormat;
    starRating: number;

    constructor(reviewId: number, 
                userId: number, 
                imdbId: string, 
                reviewComment: string, 
                dateCreated: DateTimeFormat, 
                starRating: number){
        
                    this.reviewId = reviewId;
                    this.userId = userId;
                    this.imdbId = imdbId;
                    this.reviewComment = reviewComment;
                    this.dateCreated = dateCreated;
                    this.starRating = starRating;
    }
}