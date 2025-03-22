import { Component, inject, Input } from '@angular/core';
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
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
@Component({
  selector: 'app-device-detailed-view',
  imports: [RouterOutlet, MatListModule, MatIconModule, MatDividerModule, DatePipe, MatToolbarModule, MatCardModule, NgClass, JsonPipe, MatButtonModule, MatSidenavModule, MatGridListModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, NgIf, MatDatepickerModule, MatSnackBarModule,DeviceDetailedViewComponent,   ],
  templateUrl: './device-detailed-view.component.html',
  styleUrl: './device-detailed-view.component.scss'
})
export class DeviceDetailedViewComponent {
  editMode: Boolean = false;
  private _snackBar = inject(MatSnackBar);


@Input() selectedDevice: any;

editModeToggle(mode: Boolean, save?: any) {
  this.editMode = mode;
  if(save) {
    this._snackBar.open('Data Saved Successfuly', 'close');

  }
}
}
