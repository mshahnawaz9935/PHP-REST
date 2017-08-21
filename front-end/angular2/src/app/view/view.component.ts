import {  Http , RequestOptions, Headers, Response } from '@angular/http'; 
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {DataService} from '../DataService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
data;
    constructor(private http:Http,  private DataService: DataService ,private Router: Router) {
      this.http.get('http://localhost:8000/api/customers')
                              .map((response : Response) => response.json()).subscribe((Serverdata) => {
                                console.log('Data is ' + Serverdata );
                                this.data = Serverdata;
                              });
   }

  ngOnInit() {
  }
  read(id)
  {
    console.log(id);
    this.DataService.myid = id;
    this.Router.navigate(['/read']);

  }
  update(id)
  {
          console.log(id);
           this.DataService.myid = id;
               this.Router.navigate(['/update']);
  }
  delete(id)
  {
        console.log(id);
         this.DataService.myid = id;
          this.Router.navigate(['/delete']);
  }

}
