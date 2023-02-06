import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolListComponent } from './school-list/school-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    SchoolListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule    
  ],
  exports: [
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class SearchModule { }
