import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { RoadOptions } from './models/road-options';
import { DISPLAY_TYPE, RoadId, UnionType, UnionTypes } from './models/roads';
import { GetdataService } from './services/getdata.service';
import {
  Observable,
  Subscriber,
  concatMap,
  distinctUntilChanged,
  from,
  map,
  mergeAll,
  mergeMap,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  // @ViewChild(MapMarker, { static: false }) marker!: MapMarker;

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

  // onPositionChanged() {
  //   console.log(JSON.stringify(this.marker.getPosition()));
  //   const lat = this.marker.getPosition()?.lat() || this.lat;
  //   const lng = this.marker.getPosition()?.lng() || this.lng;
  //   this.center = { lat, lng };
  // }

  onMapClick(event: any) {
    // console.log(event);
  }

  // logCenter() {
  //   console.log(JSON.stringify(this.map.getCenter()));
  // }

  selectedRoads: Array<string> = [];
  onRoadsSelected(event: Array<RoadId>) {
    // console.log('app component ',event);
    this.selectedRoads = event;
  }

  constructor(private getData: GetdataService) {}
  datasList$ = new Observable<any>();
  receivedData: Array<UnionType> = [];

  onTypeChange(type: string) {
    const displayType = DISPLAY_TYPE[type as keyof typeof DISPLAY_TYPE];
    console.log(type);
    console.log(displayType);

    //v3
    this.datasList$ = from(this.selectedRoads).pipe(
      map((item) => this.getData.getRoadServices(item, displayType)),
      mergeAll()
    );
    // .pipe(map((val) => val[displayType as keyof UnionTypes]))
    this.datasList$.subscribe(
      (val) => (this.receivedData = [...this.receivedData, ...val[displayType]])
    );

    //v2
    // this.datasList$ = from(this.selectedRoads).pipe(
    //   concatMap((item) =>
    //     this.getData.getRoadServices(item, DISPLAY_TYPE[displayType])
    //   )
    //   // distinctUntilChanged()
    // );
    // this.datasList$.subscribe((value) => console.log(value));

    //v1
    // for (let i = 0; i < this.selectedRoads.length; i++) {
    //   this.datasList$ = this.getData
    //     .getRoadServices(this.selectedRoads[i], DISPLAY_TYPE[displayType])
    //     .pipe(
    //       map((data) => data),
    //       distinctUntilChanged()
    //       );
    // }
    // this.datasList$.subscribe((value) => console.log(value));
  }

  // ngOnInit(){
  //   console.log('onInit app');
  // }
  // ngOnChanges(){
  //   console.log('ngOnChanges', this.receivedData);
  // }
  ngDoCheck(){
    console.log('onDoCheck app', this.receivedData);
    // for(let i = 0; i < this.receivedData.length; i++){
    //   this.position.lat = Number(this.receivedData[i].coordinate.lat);
    //   this.position.lng = Number(this.receivedData[i].coordinate.long);
    //   }
  }
}
