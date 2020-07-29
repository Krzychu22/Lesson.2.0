import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {animatePlane} from './animate-plane';
import {gsap} from 'gsap';

@Component({
  selector: 'app-fly-plane',
  templateUrl: './fly-plane.component.html',
  styleUrls: ['./fly-plane.component.scss']
})
export class FlyPlaneComponent implements OnInit {

  @Input() position;
  @Input() duration = 3;
  @Input() offScreen = .5;
  @ViewChild('page', {static: true}) page: ElementRef<HTMLElement>;
  private refGsap: gsap.core.Timeline;

  // @HostListener('window:resize') onResize() {this.flyPlane()}

  constructor() {

  }

  ngOnInit(): void {
  }

  flyPlane() {
    if (this.refGsap) {
      this.refGsap.kill();
    }
    const plane = this.page.nativeElement.querySelector<HTMLElement>('.plane');
    this.refGsap = animatePlane(plane, this.duration, this.offScreen);

  }
}
