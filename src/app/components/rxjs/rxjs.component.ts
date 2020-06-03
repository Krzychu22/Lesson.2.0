import {Component, OnInit} from '@angular/core';
import {combineLatest, fromEvent} from 'rxjs';
import {filter, map, pluck, startWith, tap} from 'rxjs/operators';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  model = this.fb.group({
    x: [0]
  });
  mouseMove$ = fromEvent<MouseEvent>(window, 'mousemove').pipe(
    // filter(event => event.pageX > 300),
    map(event => {
      return {
        top: event.pageY - 25,
        left: event.pageX - 25
      };
    }),
    // tap(event => console.log(event)),
    startWith({top: 500, left: 500}));

  keys$ = fromEvent<KeyboardEvent>(window, 'keydown').pipe(
    filter(e => ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.key) !== -1),

    map(e => {
      let left = 0;
      let top = 0;
      switch (e.key) {
        case 'ArrowUp':
          top = -10;
          break;
        case 'ArrowDown':
          top = 10;
          break;

        case 'ArrowLeft':
          left = -10;
          break;
        case 'ArrowRight':
          left = 10;
          break;
      }
      return {
        left,
        top
      };
    }),
    tap(e => console.log(e)), startWith({top: 0, left: 0}));
  x$ = this.model.valueChanges.pipe(pluck('x'), startWith(0));
  move$ = combineLatest([this.keys$, this.mouseMove$, this.x$]).pipe(map(([keys, mouse, x]) => {
    console.log(keys, mouse);
    return {
      top: mouse.top + keys.top,
      left: mouse.left + keys.left + x,
    };
  }));

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
