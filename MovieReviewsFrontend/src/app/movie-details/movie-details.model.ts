export class MovieDetails {
    
    movieID: string;
    comment: string;

    constructor(movieID: string, comment: string){
        this.movieID = movieID;
        this.comment = comment;
    }
}