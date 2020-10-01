import { SampleState } from './reducers';
import { createSelector } from '@ngrx/store';

const selectFeature = (state: { sample: SampleState }) => state.sample;

export const selectCurrentCount = createSelector(
  selectFeature,
  (state: SampleState) => state.currentNumber
);
