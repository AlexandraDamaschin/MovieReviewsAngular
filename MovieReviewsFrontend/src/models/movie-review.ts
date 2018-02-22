export class MovieReview {
    ReviewId: number;
    UserId: number;
    ImdbId: string;
    ReviewComment: string;
    DateCreated: DateTimeFormat;
    StarRating: number;

    constructor(ReviewId: number, 
                UserId: number, 
                ImdbId: string, 
                ReviewComment: string, 
                DateCreated: DateTimeFormat, 
                StarRating: number){
        
                    this.ReviewId = ReviewId;
                    this.UserId = UserId;
                    this.ImdbId = ImdbId;
                    this.ReviewComment = ReviewComment;
                    this.DateCreated = DateCreated;
                    this.StarRating = StarRating;
    }
}