import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDetailedViewComponent } from './device-detailed-view.component';

describe('DeviceDetailedViewComponent', () => {
  let component: DeviceDetailedViewComponent;
  let fixture: ComponentFixture<DeviceDetailedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceDetailedViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
