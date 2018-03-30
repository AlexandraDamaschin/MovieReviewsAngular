import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';
import { MovieReview } from '../models/movie-review';
import { StringList } from './strings';

@Injectable()
export class CustomApiService {  

    private urlBaseID: string = StringList.CUSTOM_API_BASE_ID;
    private urlBaseALL: string = StringList.CUSTOM_API_BASE_ALL;
    private putUrl: string = StringList.CUSTOM_API_BASE_POST;

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    createReview(review: MovieReview) {
        return this.http.post(this.putUrl, review);
      }

    getReviews(movId): Observable<MovieReview> {
        if(movId != ''){
            return this.http.get(this.urlBaseALL).map((response: Response) => {
                return <MovieReview>response.json();
            }).catch(this.handleError);
        }
        else {
            return this.http.get(this.urlBaseID + movId).map((response: Response) => {
                return <MovieReview>response.json();
            }).catch(this.handleError);
        }

    }


    private handleError(errorResponse: Response) {
        console.log(errorResponse.statusText);
        return Observable.throw(errorResponse.json().error || "Server error");
    }
}
