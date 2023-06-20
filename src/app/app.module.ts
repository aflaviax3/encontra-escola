import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchModule } from './search/search.module';
import { MethodologiesModule } from './methodologies/methodologies.module';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';
import { NgxTranslateModule } from './translate/translate.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SchoolDetailComponent
    ],
    providers: [HttpClientModule, { provide: BsDropdownConfig, useValue: { autoClose: true } }],
    bootstrap: [AppComponent],
    imports: [
        SharedModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BsDropdownModule.forRoot(),
        ReactiveFormsModule,
        HttpClientModule,
        SearchModule,
        MethodologiesModule,
        QuestionnaireModule,
        NgxTranslateModule
    ]
})
export class AppModule { }
