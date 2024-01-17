import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  uid: string = localStorage.getItem('uid')!;
  deviceType: string = '';

  constructor(private device: DeviceDetectorService) {}

  ngOnInit() {
    this.deviceType = this.device.deviceType;
  }
}
