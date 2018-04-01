export class Movie {
    imdbID: string;
    Title: string;
    Year: number;
    Rated: string;
    ImageUrl: string;
    Plot: string;
    Director: string;
    Actors: string;

    constructor(movieID: string, title: string, ImageUrl: string){
        this.imdbID = movieID;
        this.Title = title;
        this.ImageUrl = ImageUrl;
    }
}