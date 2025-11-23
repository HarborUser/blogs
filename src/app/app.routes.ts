import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateBlogsComponent } from './views/create-blogs/create-blogs.component';
import { TransfereService } from './services/TransfereService';
import { ViewBlogsComponent } from './views/view-blogs/view-blogs.component';
import { ViewSingleBlogComponent } from './views/view-single-blog/view-single-blog.component';

export const routes: Routes = [

        { 
            path: '',
             redirectTo: '', 
             pathMatch: 'full',
          
        },
        
             { path:'home',
              //pathMatch: 'prefix', //defaul

               component:CreateBlogsComponent,
               providers:[TransfereService],
              
             },
              { path:'view',
                
              
               component:ViewBlogsComponent,
               providers:[TransfereService]
             },
                { path:'viewPage',
               component:ViewSingleBlogComponent,
               providers:[TransfereService]
             }
        
        
    
   
   
];
