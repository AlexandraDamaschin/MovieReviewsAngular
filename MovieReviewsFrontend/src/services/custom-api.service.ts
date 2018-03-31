import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';
import { MovieReview } from '../models/movie-review';
import { StringList } from './strings';

import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class CustomApiService {  

    private urlBaseID: string = StringList.CUSTOM_API_BASE_ID;
    private urlBaseALL: string = StringList.CUSTOM_API_BASE_ALL;
    private postUrl: string = StringList.CUSTOM_API_BASE_POST;
    private putUrl: string = "http://localhost:63548/api/Reviews/UpdateReview/";

    private temp: Observable<MovieReview>;
    private temp2: Observable<MovieReview>;

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    // Creates a new review through our Custom API
    createReview(review: MovieReview) {
        return this.http.post(this.postUrl, review);
    }

    updateReview(review: MovieReview){
        return this.http.put((this.putUrl + review.reviewId), review);
    }

    // Gets reviews from our Custom API. 
    getReviews(movId): Observable<MovieReview> {
        if(movId == ''){ // If no id provided, get all reviews.
            return this.http.get(this.urlBaseALL).map((response: Response) => {
                return <MovieReview>response.json();
            }).catch(this.handleError);
        }
        else { // Otherwise show reviews for that specific ImdbID
            return this.http.get(this.urlBaseID + movId).map((response: Response) => {
                return <MovieReview>response.json();
            }).catch(this.handleError);
        }
    }

    // Handles errors
    private handleError(errorResponse: Response) {
        console.log(errorResponse.statusText);
        return Observable.throw(errorResponse.json().error || "Server error");
    }
}
