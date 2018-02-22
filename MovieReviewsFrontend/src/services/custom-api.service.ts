import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { MovieReview } from '../models/movie-review';

@Injectable()

export class CustomApiService {
    // http://localhost:57581/api/Reviews
    private urlBase: string = "http://localhost:57581";
    private urlID: string = "http://localhost:57581";

    constructor(
        private http: Http
    ) { }

    getReviews(): Observable<MovieReview> {
        return this.http
            .get(this.urlBase)
            .map((response: Response) => {
                return <MovieReview>response.json()
            })
            .catch(this.handleError);
    }

    getReviewID(id): Observable<MovieReview> {
        return this.http
            .get(this.urlID + id)
            .map((response: Response) => {
                return <MovieReview>response.json()
            })
            .catch(this.handleError);
    }

    private handleError(errorResponse: Response) {
        console.log(errorResponse.statusText);
        return Observable.throw(errorResponse.json().error || "Server error");
    }

}
