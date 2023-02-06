import { Component } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent {
  favoriteSeason: string = '';
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn']; 
}
