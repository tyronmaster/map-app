import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Closure,
  Closures,
  DISPLAY_TYPE,
  ElectricChargingStation,
  ElectricChargingStations,
  ParkingLorries,
  ParkingLorry,
  RoadId,
  RoadWork,
  RoadWorks,
  Roads,
  Warning,
  Warnings,
  Webcam,
  Webcams,
} from '../models/roads';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetdataService {
  constructor(private http: HttpClient) {}

  getRoadsList(): Observable<Roads> {
    return this.http.get<Roads>(environment.AUTOBAN_API_LINK);
  }

  getRoadServices(roadId: RoadId, serviceName: string) {
    return this.http.get(
      environment.AUTOBAN_API_LINK + `${roadId}/services/${serviceName}`
    );
  }

  getRoadWorks(roadId: RoadId): Observable<RoadWorks> {
    return this.http.get<RoadWorks>(
      environment.AUTOBAN_API_LINK + `/${roadId}/services/roadworks`
    );
  }
  getRoadWorkById(roadworkId: string): Observable<RoadWork> {
    return this.http.get<RoadWork>(
      environment.AUTOBAN_API_LINK + `/details/roadworks/${roadworkId}`
    );
  }

  getWebcams(roadId: RoadId): Observable<Webcams> {
    return this.http.get<Webcams>(
      environment.AUTOBAN_API_LINK + `/${roadId}/services/webcam`
    );
  }
  getWebcamById(webcamId: string): Observable<Webcam> {
    return this.http.get<Webcam>(
      environment.AUTOBAN_API_LINK + `/details/webcam/${webcamId}`
    );
  }

  getParkingLoorries(roadId: RoadId): Observable<ParkingLorries> {
    return this.http.get<ParkingLorries>(
      environment.AUTOBAN_API_LINK + `/${roadId}/services/parking_lorry`
    );
  }
  getParkingLorryById(lorryId: string): Observable<ParkingLorry> {
    return this.http.get<ParkingLorry>(
      environment.AUTOBAN_API_LINK + `/details/webcam/${lorryId}`
    );
  }

  getWarnings(roadId: RoadId): Observable<Warnings> {
    return this.http.get<Warnings>(
      environment.AUTOBAN_API_LINK + `/${roadId}/services/warning`
    );
  }
  getWarningById(warningId: string): Observable<Warning> {
    return this.http.get<Warning>(
      environment.AUTOBAN_API_LINK + `/details/warning/${warningId}`
    );
  }

  getClosures(roadId: RoadId): Observable<Closures> {
    return this.http.get<Closures>(
      environment.AUTOBAN_API_LINK + `/${roadId}/services/closure`
    );
  }
  getClosureById(closureId: string): Observable<Closure> {
    return this.http.get<Closure>(
      environment.AUTOBAN_API_LINK + `/details/warning/${closureId}`
    );
  }

  getElectricChargingStations(
    roadId: RoadId
  ): Observable<ElectricChargingStations> {
    return this.http.get<ElectricChargingStations>(
      environment.AUTOBAN_API_LINK +
        `/${roadId}/services/electric_charging_station`
    );
  }
  getElectricChargingStationById(
    stationId: string
  ): Observable<ElectricChargingStation> {
    return this.http.get<ElectricChargingStation>(
      environment.AUTOBAN_API_LINK + `/details/warning/${stationId}`
    );
  }
}
