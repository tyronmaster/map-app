import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  display: any;

  center: google.maps.LatLngLiteral = {
    lat: 52.632054,

    lng: 11.138379,
  };

  zoom = 8;

  onMapClick(event: any) {
    console.log(event);
  }
}
