import { createAction, props } from '@ngrx/store';

export const addAction = createAction(
  '[To do] Add',
  props<{ text: string; id: string; checked: boolean }>()
);
export const changeAction = createAction(
  '[To do] change',
  props<{ text: string; id: string }>()
);
export const deleteAction = createAction(
  '[To do] Delete',
  props<{ id: string }>()
);
export const checkedAction = createAction(
  '[To do] Checked',
  props<{ id: string; checked: boolean }>()
);
export const dragAndDropAction = createAction(
  '[To do] Drag and drop',
  props<{ drag: number; drop: number }>()
);
export const editAction = createAction('[To do] Edit', props<{ id: string }>());
