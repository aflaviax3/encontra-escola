import { AfterViewInit, Component } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent  implements AfterViewInit {
  service :any;
  public reviews = [];

  GOOGLE_PLACE_ID = 'ChIJAQVWODauEmsRyf7R_XUIFtc';
  ngAfterViewInit() {
    const request = {
      placeId: this.GOOGLE_PLACE_ID,
      fields: ['reviews']
    };

    const placeRequest = {
      query: 'COLEGIO EVOLUTI'
      // fields: ["place_id", "geometry", "name"]
    }

    this.service = new google.maps.places.PlacesService(document.getElementById('googleReviews'));

    // this.service.findPlaceFromQuery()

    // this.service.getDetails(request, this.callback);
    this.service.textSearch(placeRequest, this.callback)
  }

  public callback = (place:any, status:any) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      // this.reviews = place.reviews.slice();
      this.reviews = place;
    }
  };
}
