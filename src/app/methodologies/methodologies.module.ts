import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MethodologiesOverviewComponent } from './methodologies-overview/methodologies-overview.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion';


@NgModule({
  declarations: [
    MethodologiesOverviewComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    NgbModule
  ]
})
export class MethodologiesModule { }
