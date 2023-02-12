import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { SchoolListComponent } from './search/school-list/school-list.component';
import { MethodologiesOverviewComponent } from './methodologies/methodologies-overview/methodologies-overview.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire/questionnaire.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'school/:id', component: SchoolDetailComponent},
  {path: 'school-search', component: SchoolListComponent},
  {path: 'school-methodologies', component: MethodologiesOverviewComponent},
  {path: 'questionnaire', component: QuestionnaireComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
