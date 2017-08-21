import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class DataService {

myid:string;
    constructor(private http: Http) {

        this.myid='';
        
    }


    



}