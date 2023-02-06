import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    QuestionnaireComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule
  ]
})
export class QuestionnaireModule { }
