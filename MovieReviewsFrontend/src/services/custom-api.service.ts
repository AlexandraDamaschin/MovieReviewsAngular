import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';
import { MovieReview } from '../models/movie-review';
import { StringList } from './strings';

@Injectable()
export class CustomApiService {  

    private urlBase: string = StringList.CUSTOM_API_BASE;
    private putUrl: string = 'http://localhost:63548/api/reviews/';

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    createReview(review: MovieReview) {
        return this.http.post(this.putUrl, review);
      }

    getReviews(movId): Observable<MovieReview> {
        return this.http.get(this.urlBase + movId).map((response: Response) => {
            return <MovieReview>response.json();
        }).catch(this.handleError);
    }


    private handleError(errorResponse: Response) {
        console.log(errorResponse.statusText);
        return Observable.throw(errorResponse.json().error || "Server error");
    }
}
