import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';
    import { Router } from '@angular/router'
import { RouterModule } from '@angular/router';
import { TransfereService } from './services/TransfereService';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatCardModule,
    RouterOutlet,MatSlideToggleModule,
    MatCardModule,FormsModule,MatInputModule,
     MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[TransfereService,HttpClient]
  
})
export class AppComponent {
  title = 'blogs';

  constructor(private router:Router, private route:ActivatedRoute, private transf: TransfereService){

  }
  ngOnInit(){
    console.log(this.route.snapshot)
    console.log("Loggin from App")
    //this.transf.getAllBlogs();
 
  }

  btnClick() {
        this.router.navigateByUrl('home');
        console.log("Does it work");
};
}

