import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule, DatePipe, JsonPipe, NgClass, NgIf} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DeviceDetailedViewComponent } from '../app/device-detailed-view/device-detailed-view.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Section {
  id: Number,
  name: string;
  updated: Date;
  status: Boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatListModule, MatIconModule, MatDividerModule, DatePipe, MatToolbarModule, MatCardModule, NgClass, JsonPipe, MatButtonModule, MatSidenavModule, MatGridListModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, NgIf, MatDatepickerModule, DeviceDetailedViewComponent, MatProgressSpinnerModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'device-mgmt';
  private _snackBar = inject(MatSnackBar);

  showSpinner = false;
  showFiller = false;
  devices: Section[] = [
    {
      id: 1,
      name: 'Device 1',
      updated: new Date('1/1/16'),
      status: true
    },
    {
      id: 2,
      name: 'Device 2',
      updated: new Date('1/17/16'),
      status: false
    },
    {
      id: 3,
      name: 'Device 3',
      updated: new Date('1/28/16'),
      status: true
    },
    {
      id: 4,
      name: 'Device 4',
      updated: new Date('1/28/18'),
      status: true
    },
  ];

  selectedDevice?: any;

ngOnInit() {

}

  onSelect(device: any): void {
    this.selectedDevice = device;
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      if(device.id==4) {
        this._snackBar.open('Something Wrong', 'close', {
          duration: 3000,
          panelClass: ['redSnackClass'],
        });

      } else {
        this._snackBar.open('Data Loaded Successfuly', 'close', {
          duration: 3000,
          panelClass: ['greenSnackClass'],
        });

      }
    }, 2000);
  }
}
