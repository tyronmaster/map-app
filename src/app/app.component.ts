import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  @ViewChild(MapMarker, { static: false }) marker!: MapMarker;
  ngAfterViewInit() {
    // this.logCenter();
  }

  center: google.maps.LatLngLiteral = {
    lat: 52.632054,
    lng: 11.138379,
  };
  zoom = 8;

  position: google.maps.LatLngLiteral = {
    lat: 52.632054,
    lng: 11.138379,
  };
  markerOptions: google.maps.MarkerOptions = { draggable: true };

  onPositionChanged() {
    console.log(JSON.stringify(this.marker.getPosition()));
  }

  onMapClick(event: any) {
    console.log(event);
  }

  // logCenter() {
  //   console.log(JSON.stringify(this.map.getCenter()));
  // }
}
