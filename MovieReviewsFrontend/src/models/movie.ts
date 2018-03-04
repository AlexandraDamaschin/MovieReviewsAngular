export class Movie {
    imdbID: string;
    Title: string;
    Year: number;
    Rated: string;
    Poster: string;
    Plot: string;
    Director: string;
    Actors: string;
    starRating: number;

    constructor(movieID: string, title: string){
        this.imdbID = movieID;
        this.Title = title;
    }
}