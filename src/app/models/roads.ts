export type RoadId = string;
export interface Roads {
  roads: Array<RoadId>;
}

// TODO - issue types mismatch in Swagger & server response!
export interface RoadItem {
  extent: string;
  identifier: string;
  routeRecommendation: Array<unknown>;
  coordinate: { lat: string; long: string };
  footer: Array<string>;
  icon: string;
  isBlocked: string;
  description: Array<string>;
  title: string;
  point: string;
  display_type: DISPLAY_TYPE;
  lorryParkingFeatureIcons: Array<LorryParkingFeatureIcon>;
  future: boolean;
  subtitle: string;
}
export interface RoadEvent extends RoadItem {
  startTimestamp: string;
}

export interface RoadWork extends RoadEvent {
  impact: {
    lower: string;
    upper: string;
    symbols: Array<string>;
  };
}
export interface RoadWorks {
  roadworks: Array<RoadWork>;
}

export interface Webcam extends RoadItem {
  operator: string;
  imageurl: string;
  linkurl: string;
}
export interface Webcams {
  webcam: Array<Webcam>;
}

export interface ParkingLorry extends RoadItem {}
export interface ParkingLorries {
  parking_lorry: Array<ParkingLorry>;
}

export interface Warning extends RoadEvent {}
export interface Warnings {
  warning: Array<Warning>;
}

export interface Closure extends RoadEvent {}
export interface Closures {
  closure: Array<Closure>;
}

export interface ElectricChargingStation extends RoadItem {}
export interface ElectricChargingStations {
  electric_charging_station: Array<ElectricChargingStation>;
}

export enum DISPLAY_TYPE {
  ROADWORKS = 'roadworks',
  WEBCAM = 'webcam',
  PARKING = 'parking_lorry',
  WARNING = 'warning',
  WEIGHT_LIMIT_35 = '',
  CLOSURE = 'closure',
  CLOSURE_ENTRY_EXIT = 'closure',
  STRONG_ELECTRIC_CHARGING_STATION = 'electric_charging_station',
  SHORT_TERM_ROADWORKS = 'roadworks',
  ELECTRIC_CHARGING_STATION = 'electric_charging_station',
}

interface LorryParkingFeatureIcon {
  icon: string;
  description: string;
  style: string;
}

export type UnionType =
  | RoadWork
  | Webcam
  | ParkingLorry
  | Warning
  | Closure
  | ElectricChargingStation;

export type UnionTypes =
  | RoadWorks
  | Webcams
  | ParkingLorries
  | Warnings
  | Closures
  | ElectricChargingStation;
