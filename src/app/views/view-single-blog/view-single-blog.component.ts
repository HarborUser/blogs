import { Component } from '@angular/core';
import { TransfereService } from '../../services/TransfereService';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { query } from 'express';
import { AppComponent } from '../../app.component';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-view-single-blog',
  standalone: true,
  imports: [MatButton, ReactiveFormsModule, MatInput, MatButtonModule, MatFormField, RouterLink],
  templateUrl: './view-single-blog.component.html',
  styleUrl: './view-single-blog.component.scss'
})
export class ViewSingleBlogComponent {
  singleBlog:any;
  testId:any;
  currentIndexOfBlog:any;
  createBlog:any;
  changeDisplay:any
  removedTextToInput:any;
     constructor(private builder:FormBuilder,public service:TransfereService, private router: Router, private activeRoute:ActivatedRoute, protected app:AppComponent){
            
        }
 ngOnInit():void {
   
      // Build your child from
      console.log("Welcome to the view page");
      this.activeRoute.data
       let storeFrondend=  this.service.getAllBlogs()
      console.log(this.service.getMessage())
      console.log(storeFrondend)
      console.log(this.service.testDataOntable)
      let pars_json = this.service.getMessage();
      
      console.log(this.activeRoute.snapshot.data)
      this.singleBlog = this.activeRoute.snapshot.queryParams['id'];
      console.log(this.singleBlog);
      console.log(this.activeRoute.snapshot)

      this.currentIndexOfBlog = this.service.testDataOntable[this.singleBlog]
      //  let bl = this.service.getMessage();
      //  console.log(bl)
        
//         this.activeRoute.queryParams.subscribe(params => {
//     this.testId = params['title'];
//  let data = sessionStorage.getItem('Submit');
//           console.log(data)
    this.createBlog = this.builder.group({
         
           Title:['',[Validators.required]],
           description:['',[Validators.required]],
           Author:['',[Validators.required]]
   
         })
   
//   });
   console.log(this.testId)
    }


    navigateRouteBackToViewPage(){
      let title:any;
      this.router.navigate(['view'],{queryParams: { title: this.testId }})

    }

    //Build a Edit Button to edit existing data on the based on the index

    editCurrentBlogSelectedandUpdateIt(){
      //Add Input Boxes upon editing, and removing those same input boxes and simply displyaing them
      //as <p> tags

        this.createBlog = this.builder.group({
            
              Title:[this.currentIndexOfBlog.Title,[Validators.required]],
              description:[this.currentIndexOfBlog.description,[Validators.required]],
              Author:[this.currentIndexOfBlog.Author,[Validators.required]]
      
            });

             if(document.getElementById('divCheckbox')?.style.display == "block"){
               this.changeDisplay.style.display = "none";
       }
       else{
           this.changeDisplay = document.getElementById('divCheckbox');
          this.changeDisplay.style.display = "block";

          
       }
          
       this.removedTextToInput = document.getElementById('edit-div');
       this.removedTextToInput.style.display = "none"
           
      
            
    }

    //Create a delete that remove the index from the page and re-routes it to the view page



   
}
