import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CdkDrag, CdkDragStart} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-photo-click-point',
  templateUrl: './photo-click-point.component.html',
  styleUrls: ['./photo-click-point.component.scss']
})
export class PhotoClickPointComponent implements OnInit {

  @Input() selectedPoint = false;
  x = 100;
  y = 100;
  transition = [];

  @ViewChild('ball', {
    static: false,
    read: CdkDrag
  }) ballElement: CdkDrag;

  constructor() {
  }

  ngOnInit(): void {
  }

  clickPoint(event: MouseEvent): void {
    this.selectedPoint = true;
    this.transition = ['.4s'];

    // @ts-ignore
    if (event.target.classList.contains('ball')) {
      return;
    }
    this.x = event.offsetX - 15;
    this.y = event.offsetY - 15;


    this.ballElement.reset();
  }

  startDrag() {
    this.transition = [`none`];
  }
}
