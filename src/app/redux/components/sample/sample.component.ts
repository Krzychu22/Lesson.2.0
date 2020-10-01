import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SampleState } from './redux/reducers';
import {
  decreaseAction,
  increaseAction,
  resetAction,
  setCurrentValue,
} from './redux/actions';
import { selectCurrentCount } from './redux/selector';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  currentValue$ = this.store.pipe(select(selectCurrentCount));
  constructor(private store: Store<{ sample: SampleState }>) {}

  ngOnInit(): void {}

  increase() {
    this.store.dispatch(increaseAction());
  }

  decrease() {
    this.store.dispatch(decreaseAction());
  }

  reset() {
    this.store.dispatch(resetAction());
  }
  set(val) {
    this.store.dispatch(setCurrentValue({ newValue: val }));
  }
}
