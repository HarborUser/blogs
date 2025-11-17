import { Injectable } from '@angular/core';
import { response, Router } from 'express';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  
})
export class TransfereService {
      testDataOntable:any= [{
      "Title":"Harry Potter 1",
      "Author":"JK Rowling"
    },
  {
      "Title":"Harry Potter 2",
      "Author":"JK Rowling"
    },
  {
      "Title":"Harry Potter 3",
      "Author":"JK Rowling"
    }, {
      "Title":"Harry Potter 4",
      "Author":"JK Rowling"
    }]
  private data:any;
       private messageSource = new Subject<any>();

apiBaseUrl:any =  'http://localhost:8080'
  sample:any={};

  
  constructor(private http: HttpClient

   
  ) { }



   setData(data:any){
    this.data = data;
   // this.testDataOntable.push(data);
    console.log(this.data)
  }

  messages: FormGroup[] = [];

  add(message: any) {
    this.testDataOntable.push(message);
    //localStorage.setItem(message,message)
  }

  getMessage():FormGroup[]{
    return this.messages;
  }

   public getData(){
 
    //this.clearData();
    console.log(this.messageSource);
    return  this.messageSource;
  }

  clearData(){
    this.messages = []
  }
 headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
 
   public getAllBlogs() {
let headers = new HttpHeaders({
    'Content-Type': 'application/json'});
let options = { headers: headers };

  //return this.http.get(`${this.apiBaseUrl}/hello`,  options);
   return this.http.get(`http://localhost:8080/players`,  {headers:this.headers});

}
 public getOneBlog(requestedParams:any){
  let headers = new HttpHeaders({
    'Content-Type': 'application/json'});
  let paramsFromUser = requestedParams;
  console.log(paramsFromUser);
   return this.http.get(`view-single`,  {params: paramsFromUser} )
 }

}