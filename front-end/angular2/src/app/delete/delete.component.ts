import {  Http , RequestOptions, Headers, Response } from '@angular/http'; 
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import {DataService} from '../DataService';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
data={};
deleted;
    constructor(private http:Http , private DataService: DataService, private Router: Router) {

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

   ondelete()
   {
     this.http.delete('http://localhost:8000/api/customers/' + this.DataService.myid ) 
                         .map((res:Response) => res.json()) 
                         .subscribe((Serverdata) => {
                                console.log('Data is ' + Serverdata );
                                this.data = Serverdata;
                                this.deleted = "Successfully deleted";
                                alert('Deleted');
                                this.Router.navigate(['/view']);
                              });
                        
    }   

  ngOnInit() {
  }

}
