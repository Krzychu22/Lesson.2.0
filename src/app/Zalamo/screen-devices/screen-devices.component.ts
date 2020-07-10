import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-screen-devices',
  templateUrl: './screen-devices.component.html',
  styleUrls: ['./screen-devices.component.scss']
})
export class ScreenDevicesComponent implements OnInit {

  @Input() laptop = false;
  @Input() ipad = false;
  @Input() iphone = false;

  constructor() { }

  ngOnInit(): void {
  }

}
