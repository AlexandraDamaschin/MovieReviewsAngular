export class MovieReview {
    reviewId: number;
    userID: number;
    imdbId: string;
    reviewComment: string;
    dateCreated: DateTimeFormat;    
    starRating: number;
    imageUrl: string;

    constructor(
        reviewId: number,
        userID: number,
        imdbId: string,
        reviewComment: string,
        dateCreated: DateTimeFormat,
        starRating: number,
        imageUrl: string) {
            this.reviewId = reviewId;
            this.userID = userID;
            this.imdbId = imdbId;
            this.reviewComment = reviewComment;
            this.dateCreated = dateCreated;
            this.starRating = starRating;
            this.imageUrl = imageUrl;
    }
}