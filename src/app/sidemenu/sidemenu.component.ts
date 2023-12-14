import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { _MatSlideToggleRequiredValidatorModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {
  isChecked = {
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

  formGroup = this._formBuilder.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  });

  constructor(private _formBuilder: FormBuilder) {}

  alertFormValues(formGroup: FormGroup) {
    console.log(JSON.stringify(formGroup.value, null, 2));
  }
}
