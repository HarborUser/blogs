import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CreateBlogsComponent } from '../create-blogs/create-blogs.component';
import {  Input } from '@angular/core'
import { TransfereService } from '../../services/TransfereService';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { query } from '@angular/animations';
import { Blog } from '../../bindings/blog.binding';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-view-blogs',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatGridListModule, MatCardModule, RouterLink],
  templateUrl: './view-blogs.component.html',
  styleUrl: './view-blogs.component.scss'
})
export class ViewBlogsComponent implements OnInit {
     @Input()  formGroup: FormGroup[] = [];
    
     dataFromChild:string='';
data$:any[]=[];

    
    constructor(public service:TransfereService, private route:Router, protected app:AppComponent){
       
      //     let pars_json = this.service.getMessage();
      // this.app.testDataOntable.push(pars_json[0])
      // removing this code to see if causes the underfined index to be added in the end.???
      }

    
     childFormGroup :any;
    x:any;
   sentDataToView:Blog = new Blog()
    ngOnInit():void {
   console.log(this.service.testDataOntable)
      // Build your child from
      console.log("Welcome to the view page");
      this.service.getData();
    console.log(this.service.getData())

      //     let dsdaa = JSON.stringify(sessionStorage.getItem("Num4"))
      //     console.log( dsdaa)
  
      // this.app.testDataOntable.push(JSON.parse(Object(dsdaa)))
       
         console.log(this.service.testDataOntable)
      //  this.service.clearData();
          // let data = sessionStorage.getItem('Submit');
          // console.log(data)
        
      this.preLoadedSessionStorage();
    }

  submitData(index:number){
    console.log(this.service.testDataOntable)
    console.log(index)
    this.sentDataToView = this.service.testDataOntable[index]
    console.log(this.sentDataToView)
      if(true){
        this.route.navigate(['/viewPage'], { queryParams: { id: index }} )
      }
      // if(true){
      //   this.service.getOneBlog(this.testDataOntable[index])
      // }
          

    }

    preLoadedSessionStorage(){
  //   this.service.getAllBlogs();
  //   var obj = {"Title":"4","Author":"Session Test"}
  //   //sessionStorage.setItem("Num4",JSON.stringify(obj))

  //   //this.testDataOntable = JSON.stringify(obj);
  //   console.log(obj)
  //   this.service.add(JSON.stringify(obj))
  //   console.log(this.app.testDataOntable)
  //  this.service.getAllBlogs();

   //for loop through test data, and sessionStorage it when adding it.
    }
  

      
   
     
   
  
     
    
}
