import { Component } from '@angular/core';
import { map, take } from 'rxjs';
import { GetdataService } from 'src/app/services/getdata.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // imports: [MatFormFieldModule, MatSelectModule],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private getData: GetdataService) {}

  selected = '';
  roads = new FormControl('');

  // roadsList$: Array<string> = [];
  roadsList$ = this.getData.getRoadsList().pipe(
    take(1),
    map((data) => data.roads)
  );

  ngOnInit() {
    // this.getData.getRoadsList().pipe(take(1)).subscribe((data) => {
    //   this.roadsList = data.roads;
    //   console.log(this.roadsList);
    // });
  }
}
