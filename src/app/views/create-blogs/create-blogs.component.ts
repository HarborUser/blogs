import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { FormArray } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { Blog } from '../../bindings/blog.binding';
import { JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterLink } from '@angular/router';
import { ViewBlogsComponent } from "../view-blogs/view-blogs.component";
import { Router } from '@angular/router';
import { TransfereService } from '../../services/TransfereService';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { stringify } from 'node:querystring';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-create-blogs',
  standalone: true,
  imports: [ReactiveFormsModule, MatCard, JsonPipe, CommonModule, MatButtonModule, RouterLink],
  templateUrl: './create-blogs.component.html',
  styleUrl: './create-blogs.component.scss'
})
export class CreateBlogsComponent {
  createBlog:any;
  form:any;
  soemthing:any
  show:Boolean=false;
    constructor(private builder:FormBuilder, private route:ActivatedRoute,private router: Router, 
       private transfereService:TransfereService, public app:AppComponent){
         transfereService.setData("APple")
       

    }
    ngOnInit(){

      this.form = this.builder.group({

        lessons: this.builder.array([])
    });


     
      this.createBlog = this.builder.group({
      
        Title:['',[Validators.required]],
        description:['',[Validators.required]],
        Author:['',[Validators.required]]

      })

    }

     get lessons() {
      return  this.form.controls["lessons"] as FormArray;
    }

    submitData(){

      let submitBlog = this.builder.group({
      
        Title:[this.createBlog.get('Title').value,[Validators.required]],
        description:[this.createBlog.get('description').value,[Validators.required]],
        Author:[this.createBlog.get('Author').value,[Validators.required]]

      })
      if(submitBlog){
              let i =0;
              console.log(submitBlog.value)
              let stringBlog = submitBlog.value
              //sessionStorage.setItem('Submit',stringBlog.Author);
              let formObj = this.transfereService.getAllBlogs();
              //let serializedForm = JSON.stringify(submitBlog.value);


              this.show=true;

              //this.lessons.insert(i,submitBlog.value)
         
              this.route.snapshot.data = this.form.value.lessons; 
       
              i+=1;
            //  this.transfereService.setData(submitBlog.value)
              console.log( this.form.value.lessons);
    //          this.router.navigate(['/view'],{ 
    // queryParams: {data: this.route.snapshot.data[0].blogName}})


    
    let JSON_string = JSON.stringify(stringBlog);
    sessionStorage.setItem("Num4",JSON_string)
    console.log(sessionStorage.getItem('Num4'))
    //console.log(JSON.parse(String(sessionStorage.getItem("Num4"))))
    let dsdaa = sessionStorage.getItem("Num4")
    let objectifySessionStorageBlog = JSON.parse(Object(dsdaa))
    let rawJON:JSON = objectifySessionStorageBlog;
    console.log(rawJON)
    this.transfereService.add((rawJON));
    
    //this.app.testDataOntable.push(rawJON)
    
    this.router.navigate(['/view'])
  
                
    
         

      }

    }
    createDate(){
      
    }


}
