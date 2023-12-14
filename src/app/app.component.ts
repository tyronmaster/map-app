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
  // ngAfterViewInit() {
  //   // this.logCenter();
  // }


  private lat = 52.632054;
  private lng = 11.138379;

  center: google.maps.LatLngLiteral = {
    lat: this.lat,
    lng: this.lng,
  };
  zoom = 8;

  position: google.maps.LatLngLiteral = {
    lat: this.lat,
    lng: this.lng,
  };
  markerOptions: google.maps.MarkerOptions = { draggable: true };

  onPositionChanged() {
    console.log(JSON.stringify(this.marker.getPosition()));
    const lat = this.marker.getPosition()?.lat() || this.lat;
    const lng = this.marker.getPosition()?.lng() || this.lng;
    this.center = { lat, lng };
  }

  onMapClick(event: any) {
    // console.log(event);
  }

  // logCenter() {
  //   console.log(JSON.stringify(this.map.getCenter()));
  // }
}
