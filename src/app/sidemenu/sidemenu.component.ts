import { Component, EventEmitter, Output } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { DISPLAY_TYPES } from '../data/constant';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {
  @Output() options = new EventEmitter<string>();

  type = '';
  dataTypes = DISPLAY_TYPES;

  onChanges(type: MatRadioChange) {
    this.options.emit(type.value);
  }
}
