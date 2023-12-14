import { Component } from '@angular/core';
import { map, take } from 'rxjs';
import { GetdataService } from 'src/app/services/getdata.service';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private getData: GetdataService) {}

  roads = new FormControl('');
  selectedRoads: Array<string> = [];

  roadsList$ = this.getData.getRoadsList().pipe(
    take(1),
    map((data) => data.roads)
  );

  onSelectionChange(event: MatSelectChange) {
    if ((this.roads.value?.length || 0) <= 5) {
      this.roads.patchValue(event.value);
      this.selectedRoads = event.value;
    }
    return;
  }

  onSelectedRoadClick(id: number) {
    this.selectedRoads.splice(id, 1);
    this.roads.patchValue(this.selectedRoads as MatSelectChange["value"]);
  }

}
