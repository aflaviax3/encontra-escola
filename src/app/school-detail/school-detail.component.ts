import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { SchoolsService } from '../schools.service';

declare const google: any;

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.scss']
})
export class SchoolDetailComponent implements OnInit, AfterViewInit {

  private schoolId: string | number = '';
  public schoolDetails: any = {};
  GOOGLE_PLACE_ID = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private schoolsService: SchoolsService
  ){

  }

  ngOnInit() {
    this.route.params.subscribe( params => this.schoolId = params["id"] );
    
    this.schoolDetails = this.schoolsService.getSchoolDetail(this.schoolId)[0];
    this.GOOGLE_PLACE_ID = this.schoolDetails.placeId;
  }

  map: any;
  service :any;
  infowindow: any;
  reviews:any;

  ngAfterViewInit() {
    const request = {
      placeId: this.GOOGLE_PLACE_ID
      // fields: ['reviews']
    };

    this.service = new google.maps.places.PlacesService(document.getElementById('googleReviews'));

    this.service.getDetails(request, this.callback);
  }

  public callback = (place:any, status:any) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      this.reviews = place;
      this.initMap(place.geometry.location);
    }
  };

  goBack(): void {
    this.location.back();
  }

  initMap(center: any) { 
    this.infowindow = new google.maps.InfoWindow();

    this.map = new google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: 15,
    });
  
    this.createMarker(this.reviews);
  }

  createMarker(place:any) {
    if (!place.geometry || !place.geometry.location) return;
  
    const marker = new google.maps.Marker({
      map: this.map,
      position: place.geometry.location,
    });
  
    google.maps.event.addListener(marker, "click", () => {
      this.infowindow.setContent(this.schoolDetails.nome || "");
      this.infowindow.open(this.map);
    });
  }
}
