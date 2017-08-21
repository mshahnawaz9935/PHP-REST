import {  Http , RequestOptions, Headers, Response } from '@angular/http'; 
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {DataService} from '../DataService';
import { Router } from '@angular/router';
import {Customer } from '../Customer';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
data;
updated;
  model = new Customer('', '');
    constructor(private http:Http , private DataService: DataService, private Router: Router) {
 

      
   }

   onsubmit()
   {
        var obj ={};
    console.log('myid', this.DataService.myid);
    if(this.DataService.myid !== '')
    {
      if(this.model.title.length > 0 && this.model.email.length > 0  )
      {
          obj = { 'title' : this.model.title , 'email' : this.model.email};
      }
      else if(this.model.title.length > 0 && this.model.email.length == 0  )
      {
          obj = { 'title' : this.model.title};
      }
      else if(this.model.title.length == 0 && this.model.email.length > 0  )
      {
          obj = {  'email' : this.model.email};
      }
        let body = obj;
       let bodyString = JSON.stringify(body); // Stringify payload
       console.log(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); 
        let options       = new RequestOptions({ headers: headers }); 

        this.http.put('http://localhost:8000/api/customers/' + this.DataService.myid , body, options) 
                         .map((res:Response) => res.json())
                          .subscribe((response) => 
            { 
              console.log('update successful');
             this.updated = "Successfully updated" 
            })
                         
    }
    else {
      this.Router.navigate(['/view']);
    }
   }

  ngOnInit() {
  }

}
