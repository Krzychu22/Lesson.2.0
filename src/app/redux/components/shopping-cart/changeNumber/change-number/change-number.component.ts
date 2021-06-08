import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
  Self,
} from '@angular/core';
import { FormControl, NgControl, Validators } from '@angular/forms';
import { delay, tap } from 'rxjs/operators';
import { AliveState } from '../../../../../ActiveState';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss'],
})
export class ChangeNumberComponent extends AliveState implements OnInit {
  @Input() minNumber = 3;
  @Input() maxNumber = 500;

  @Input() set number(value: number) {
    this.control.patchValue(value);
  }

  control = new FormControl(0, [
    Validators.min(this.minNumber),
    Validators.max(this.maxNumber),
  ]);

  @Output() newNumber = new EventEmitter<number>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscribeWhileAlive(
      this.control.valueChanges.pipe(
        delay(0),
        tap((currentValue) => this.newNumber.emit(currentValue))
      )
    );
  }

  add() {
    this.control.patchValue(
      Math.min(this.maxNumber, Number(this.control.value) + 1)
    );
  }

  reduce() {
    this.control.patchValue(Math.max(this.minNumber, this.control.value - 1));
  }

  filter(e: KeyboardEvent) {
    let rightCurrent = '';
    let leftCurrent = '';
    let newCurrent = '';
    if (
      /^\d+$/.test(e.key) === false &&
      ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'].indexOf(e.key) === -1
    ) {
      e.preventDefault();
      return;
    }
    const target = e.target as HTMLInputElement;
    if (
      (['Backspace'].indexOf(e.key) === 0 &&
        !(target.selectionStart === target.selectionEnd)) ||
      (['Delete'].indexOf(e.key) === 0 &&
        !(target.selectionStart === target.selectionEnd))
    ) {
      for (
        let i = 0;
        i < String(this.control.value).length - target.selectionEnd;
        i++
      ) {
        rightCurrent += String(this.control.value)[i + target.selectionEnd];
      }

      for (let j = 0; j < target.selectionStart; j++) {
        leftCurrent += String(this.control.value)[j];
      }
      console.log(111111, target.selectionStart);
      console.log('prawa strona:', rightCurrent, 'lewa strona:', leftCurrent);
      newCurrent = leftCurrent;
      newCurrent += rightCurrent;
      console.log(newCurrent);
      if (Number(newCurrent) < this.minNumber) {
        e.preventDefault();
        // this.control.patchValue(this.minNumber);
        return;
      }
    } else {
      for (
        let i = 0;
        i < String(this.control.value).length - target.selectionEnd;
        i++
      ) {
        rightCurrent += String(this.control.value)[i + target.selectionEnd];
      }

      for (let j = 0; j < target.selectionStart; j++) {
        leftCurrent += String(this.control.value)[j];
      }
      console.log('prawa strona:', rightCurrent, 'lewa strona:', leftCurrent);
      newCurrent = leftCurrent;
      switch (e.key) {
        case 'Backspace':
          newCurrent = newCurrent.substring(newCurrent.length - 1, -1);
          console.log('ccccccccc', leftCurrent, newCurrent);
          break;
        case 'Delete':
          rightCurrent = rightCurrent.substring(0, -1);
          console.log('ccccccccc', leftCurrent, newCurrent);
          break;
        default:
          newCurrent += e.key;
          console.log('dddddddd', leftCurrent, e.key);
      }
      newCurrent += rightCurrent;
      if (Number(newCurrent) > this.maxNumber) {
        e.preventDefault();
        // this.control.patchValue(this.maxNumber);
        return;
      }
      if (Number(newCurrent) < this.minNumber) {
        e.preventDefault();
        // this.control.patchValue(this.minNumber);
        return;
      }
    }
  }
}
