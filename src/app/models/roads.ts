export interface Roads {
  RoadId: string;
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

export interface RoadWork extends RoadItem {
  startTimestamp: string;
}

export interface Webcam extends RoadItem {
  operator: string;
  imageurl: string;
  linkurl: string;
}

export interface ParkingLorry extends RoadItem {}

export interface Warning extends RoadItem {
  startTimestamp: string;
}

export interface Closure extends RoadItem {
  startTimestamp: string;
}

export interface ElectricChargingStation extends RoadItem{

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
