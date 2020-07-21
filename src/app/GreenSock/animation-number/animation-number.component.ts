import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
import EaseFunction = gsap.EaseFunction;

@Component({
  selector: 'app-animation-number',
  templateUrl: './animation-number.component.html'
})
export class AnimationNumberComponent implements OnInit {
  get newNumber(): number {
    return this._newNumber;
  }

  @Input() duration = 1;
  @Input() ease: 'power1' | 'power2' | 'power3' | 'power4' | 'back' | 'elastic' | 'bounce'
    | 'rough' | 'slow' | 'steps' | 'circ' | 'expo' | 'sine' | EaseFunction = 'power4';

  @Input() set newNumber(value: number) {
    console.log('NOWY NUMER', value);
    this._newNumber = value;
    this.animationNumber();
  }

  lastNumber = 0;
  private _newNumber = 0;
  @ViewChild('screen', {
    static: true,
  }) screen: ElementRef<HTMLElement>;

  constructor() {
  }

  ngOnInit(): void {
    this.animationNumber();
  }

  animationNumber() {
    if (this._newNumber !== this.lastNumber) {
      const newNumber = {value: this.lastNumber};


      gsap.to(newNumber, {
        value: this._newNumber,
        onUpdate: () => this.screen.nativeElement.innerHTML = newNumber.value.toFixed(0),
        duration: this.duration,
        ease: this.ease,
      });


      this.lastNumber = this._newNumber;
    }
  }
}
