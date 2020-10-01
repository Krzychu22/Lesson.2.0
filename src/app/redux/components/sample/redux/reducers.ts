import { Action, createReducer, on } from '@ngrx/store';
import {
  decreaseAction,
  increaseAction,
  resetAction,
  setCurrentValue,
} from './actions';

export interface SampleState {
  currentNumber: number;
}

export const initialState: SampleState = {
  currentNumber: 0,
};

const numberReducer = createReducer(
  initialState,
  on(increaseAction, (state) => ({
    ...state,
    currentNumber: state.currentNumber + 1,
  })),
  on(decreaseAction, (state) => ({
    ...state,
    currentNumber: state.currentNumber - 1,
  })),
  on(resetAction, (state) => ({
    currentNumber: 0,
  })),
  on(setCurrentValue, (state, args) => ({
    ...state,
    currentNumber: args.newValue,
  }))
);

export function sampleReducer(state: SampleState | undefined, action: Action) {
  return numberReducer(state, action);
}
