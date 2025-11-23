import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TransfereService } from './services/TransfereService';

import { MatCard, MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Blog } from './bindings/blog.binding';


@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCard,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    JsonPipe
  ],
  providers:[TransfereService,Blog]
})
export class AppModule{

}