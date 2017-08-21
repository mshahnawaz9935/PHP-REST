import {  Http , RequestOptions, Headers, Response } from '@angular/http'; 
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {DataService} from '../DataService';
import { Router } from '@angular/router';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
data = {};
  constructor(private http:Http , private DataService: DataService , private Router: Router) {

    console.log('myid', this.DataService.myid);
    if(this.DataService.myid !== '')
    {
    this.http.get('http://localhost:8000/api/customers/' + this.DataService.myid )
                              .map((response : Response) => response.json())
                              .subscribe((Serverdata) => {
                                console.log('Data is ' + Serverdata );
                                this.data = Serverdata;
                              });
    }
     else {
      this.Router.navigate(['/view']);
    }
   }

  ngOnInit() {
  }

}
