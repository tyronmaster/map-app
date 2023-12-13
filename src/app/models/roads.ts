export type RoadId = string;
export interface Roads {
  roads: Array<RoadId>;
}

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

export interface RoadWork extends RoadEvent {}
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

enum DISPLAY_TYPE {
  ROADWORKS,
  WEBCAM,
  PARKING,
  WARNING,
  WEIGHT_LIMIT_35,
  CLOSURE,
  CLOSURE_ENTRY_EXIT,
  STRONG_ELECTRIC_CHARGING_STATION,
  SHORT_TERM_ROADWORKS,
  ELECTRIC_CHARGING_STATION,
}

interface LorryParkingFeatureIcon {
  icon: string;
  description: string;
  style: string;
}
