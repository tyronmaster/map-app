import { Component, EventEmitter, Output } from '@angular/core';
import { map, take } from 'rxjs';
import { GetdataService } from 'src/app/services/getdata.service';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { RoadId } from '../models/roads';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private getData: GetdataService) {}

  roadsSelector = new FormControl('');
  selectedRoads: Array<string> = [];
  @Output() roadsSelected = new EventEmitter<Array<RoadId>>();

  roadsList$ = this.getData.getRoadsList().pipe(
    take(1),
    map((data) => data.roads)
  );

  onSelectionChange(event: MatSelectChange) {
    if ((this.roadsSelector.value?.length || 0) <= 5) {
      this.roadsSelector.patchValue(event.value);
      this.selectedRoads = event.value;
      this.roadsSelected.emit(this.selectedRoads);
    }
    return;
  }

  onSelectedRoadClick(id: number) {
    this.selectedRoads.splice(id, 1);
    this.roadsSelector.patchValue(
      this.selectedRoads as MatSelectChange['value']
    );
    this.roadsSelected.emit(this.selectedRoads);
  }
}
