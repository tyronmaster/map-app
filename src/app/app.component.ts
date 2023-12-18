import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { DISPLAY_TYPE, RoadId, UnionType } from './models/roads';
import { GetdataService } from './services/getdata.service';
import {
  Observable,
  from,
  map,
  mergeAll,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  @ViewChild(MapMarker, { static: false }) marker!: MapMarker;

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
  markerOptions: google.maps.MarkerOptions = { draggable: false };

  onMapClick(event: any) {
  }

   selectedRoads: Array<string> = [];
  onRoadsSelected(event: Array<RoadId>) {
    this.selectedRoads = event;
  }

  constructor(private getData: GetdataService) {}
  datasList$ = new Observable<any>();
  receivedData: Array<UnionType> = [];

  onTypeChange(type: string) {
    const displayType = DISPLAY_TYPE[type as keyof typeof DISPLAY_TYPE];
    console.log(type);
    console.log(displayType);
    this.receivedData = [];

    this.datasList$ = from(this.selectedRoads).pipe(
      map((item) => this.getData.getRoadServices(item, displayType)),
      mergeAll()
    );
    this.datasList$.subscribe(
      (val) => (this.receivedData = [...this.receivedData, ...val[displayType]])
    );
  }

  ngDoCheck() {
    console.log('received data', this.receivedData);
  }
}
