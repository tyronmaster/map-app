import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { _MatSlideToggleRequiredValidatorModule } from '@angular/material/slide-toggle';
import { RoadOptions } from '../models/road-options';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {
  isChecked: RoadOptions = {
    roadWorks: false,
    webcam: false,
    parking: false,
    warning: false,
    weightLimit35: false,
    closure: false,
    closureEntryExit: false,
    strongElectricChargingStation: false,
    shortTermRoadWorks: false,
    electricChargingStation: false,
  };

  @Output() options = new EventEmitter<RoadOptions>();
  onChanges() {
    this.options.emit(this.isChecked);
  }
}
