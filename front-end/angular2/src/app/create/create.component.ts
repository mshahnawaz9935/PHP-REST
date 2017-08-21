import {  Http , RequestOptions, Headers, Response ,URLSearchParams } from '@angular/http'; 
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {Customer } from '../Customer';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  model = new Customer('', '');
  created;
  constructor(private http:Http ) {
    
   }
  
   onsubmit()
   {
     console.log(this.model.email.length , this.model.title.length );
     if(this.model.email.length > 0 && this.model.title.length > 0)
     {
     const body = new URLSearchParams();
        body.set('title', this.model.email);
          body.set('email', this.model.title);

      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
            let options = new RequestOptions({ headers: headers });
             return this.http.post('http://localhost:8000/api/customers', body.toString(), {
              headers : headers
            }).map(res => res.json())
            .subscribe((response) => 
            { 
              console.log('post successful');
             this.created = "Successfully created" 
            })
     }
   }

  ngOnInit() {
  }

}
