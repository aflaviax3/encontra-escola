import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { SchoolsService } from '../schools.service';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.scss']
})
export class SchoolDetailComponent implements OnInit {

  private schoolId: string | number = '';
  public schoolDetails: any = {};

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private schoolsService: SchoolsService
  ){

  }

  ngOnInit() {
    this.route.params.subscribe( params => this.schoolId = params["id"] );
    
    // this.schoolDetails = this.schoolsService.getSchoolDetail(this.schoolId)[0];
    this.schoolsService.getSchoolData(this.schoolId).subscribe(data => this.schoolDetails = data);
  }

  goBack(): void {
    this.location.back();
  }
}
