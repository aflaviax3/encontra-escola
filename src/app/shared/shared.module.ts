import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatListModule
  ], 
  exports: [
    HeaderComponent,
    FooterComponent,
    MatListModule
  ]
})
export class SharedModule { }
