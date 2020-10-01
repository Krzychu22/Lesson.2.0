import { createSelector } from '@ngrx/store';
import { ToDoState } from './reducers';

const selectFeature = (state: { todo: ToDoState }) => state.todo;

export const selectToDo = createSelector(
  selectFeature,
  (state: ToDoState) => state.List
);
