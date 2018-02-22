export class MovieReview {
    reviewId: number;
    userID: number;
    imdbId: string;
    reviewComment: string;
    dateCreated: DateTimeFormat;
    starRating: number;

    constructor(
        reviewId: number,
        userID: number,
        imdbId: string,
        reviewComment: string,
        dateCreated: DateTimeFormat,
        starRating: number) {

        this.reviewId = reviewId;
        this.userID = userID;
        this.imdbId = imdbId;
        this.reviewComment = reviewComment;
        this.dateCreated = dateCreated;
        this.starRating = starRating;
    }
}