import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { MovieReview } from '../models/movie-review';
import { StringList } from './strings';

@Injectable()

export class CustomApiService {  
    private urlBase: string = StringList.CUSTOM_API_BASE;

    constructor(private http: Http) {}  
       
    getReviews(): Observable < MovieReview > {  
        return this.http.get(this.urlBase).map((response: Response) => {  
            return <MovieReview> response.json()
        }).catch(this.handleError);
    }  

    // getReviewID(id): Observable < MovieReview > {  
    //     return this.http.get(this.urlID + id).map((response: Response) => {  
    //         return <MovieReview > response.json()  
    //     }).catch(this.handleError);  
    // }  
    
    private handleError(errorResponse: Response) {  
        console.log(errorResponse.statusText);  
        return Observable.throw(errorResponse.json().error || "Server error");  
    } 
}
