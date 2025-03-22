import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule, DatePipe, NgClass} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


export interface Section {
  name: string;
  updated: Date;
  status: Boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatListModule, MatIconModule, MatDividerModule, DatePipe, MatToolbarModule, MatCardModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'device-mgmt';
  devices: Section[] = [
    {
      name: 'Device 1',
      updated: new Date('1/1/16'),
      status: true
    },
    {
      name: 'Device 2',
      updated: new Date('1/17/16'),
      status: false
    },
    {
      name: 'Device 3',
      updated: new Date('1/28/16'),
      status: true
    },
  ];
}
