import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app-encontra-escola';
  school: string = '';
 
  setSchoolName($event:any) {
  	this.school = $event.name;
  }
}
