import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import 'rxjs/Rx';
import { Observable }     from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { StringList } from './strings';

@Injectable()
export class MovieService {

    private urlBase: string = StringList.OMDB_API_BASE;
    private urlID: string = StringList.OMDB_API_BASE;    

    constructor(private http: Http) {}  
       
    getMovies(x): Observable < Movie > {  
        return this.http.get(this.urlBase + x).map((response: Response) => {  
            return <Movie > response.json()  
        }).catch(this.handleError);  
    }  

    getMovieID(id): Observable < Movie > {  
        return this.http.get(this.urlID + id).map((response: Response) => {  
            return <Movie > response.json()  
        }).catch(this.handleError);  
    }  
    
    private handleError(errorResponse: Response) {  
        console.log(errorResponse.statusText);  
        return Observable.throw(errorResponse.json().error || "Server error");  
    } 

}
