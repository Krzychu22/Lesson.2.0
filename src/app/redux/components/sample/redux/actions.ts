import { createAction, props } from '@ngrx/store';

export const increaseAction = createAction('[Sample] Increase');
export const decreaseAction = createAction('[Sample] Decrease');
export const resetAction = createAction('[Sample] Reset');
export const setCurrentValue = createAction(
  '[Sample] Set',
  props<{ newValue: number }>()
);
