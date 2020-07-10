import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-select-photo-position',
  templateUrl: './select-photo-position.component.html',
  styleUrls: ['./select-photo-position.component.scss']
})

export class SelectPhotoPositionComponent implements OnInit {

  pointPxX: number;
  pointPxY: number;
  @Input() x: number;
  @Input() y: number;
  @Input() widthPhoto: number;
  @Input() heightPhoto: number;
  @Input() pointPhotoX: number;
  @Input() pointPhotoY: number;
  @Input() scalePhoto: number;
  css$ = new BehaviorSubject({});

  constructor(private elRef: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
    this.clickPhoto();
    this.css$.next({
      'transform': `translate(${this.pointPhotoX}px, ${this.pointPhotoY}px) scale(${this.scalePhoto})`,
    });
  }

  clickPhoto() {
    const {height, width} = this.elRef.nativeElement.getBoundingClientRect();

    if (this.x <= 50) {
      this.pointPxX = width / 2 - (this.widthPhoto / 100 * this.x);
    } else if (this.x > 50) {
      this.pointPxX = width / 2 - (this.widthPhoto - this.widthPhoto / 100 * this.x);
    }
    if (this.y <= 50) {
      this.pointPxY = height / 2 - (this.heightPhoto / 100 * this.y);
    } else if (this.y > 50) {
      this.pointPxY = height / 2 - (this.heightPhoto - this.heightPhoto / 100 * this.y);
    }

    if (this.pointPxX >= this.pointPxY) {
      this.scalePhoto = (2 * this.pointPxX + this.widthPhoto) / this.widthPhoto;
    } else if (this.pointPxX < this.pointPxY) {
      this.scalePhoto = (2 * this.pointPxY + this.heightPhoto) / this.heightPhoto;
    }
    this.pointPhotoX = width / 2 - this.x / 100 * this.widthPhoto;
    this.pointPhotoY = height / 2 - this.y / 100 * this.heightPhoto;

    console.log('współrzędne x:', this.pointPhotoX, 'współrzedne y', this.pointPhotoY);
    console.log('skala', this.scalePhoto);
  }
}


