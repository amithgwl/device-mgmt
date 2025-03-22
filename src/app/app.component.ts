import { Component } from '@angular/core';
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

export interface Section {
  id: Number,
  name: string;
  updated: Date;
  status: Boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatListModule, MatIconModule, MatDividerModule, DatePipe, MatToolbarModule, MatCardModule, NgClass, JsonPipe, MatButtonModule, MatSidenavModule, MatGridListModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'device-mgmt';
  editMode: Boolean = false;
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
  ];

  selectedDevice?: any;

  editModeToggle(mode: Boolean) {
    this.editMode = mode;
  }

  onSelect(device: any): void {
    this.selectedDevice = device;
  }
}
