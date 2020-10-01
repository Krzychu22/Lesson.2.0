import { Action, createReducer, on } from '@ngrx/store';
import {
  addAction,
  changeAction,
  checkedAction,
  deleteAction,
  dragAndDropAction,
  editAction,
} from './actions';
import { moveItemInArray } from '@angular/cdk/drag-drop';

export interface ToDoState {
  List: Array<{
    text: string;
    id: string;
    checked: boolean;
  }>;
  drag: number;
  drop: number;
}

export const initialState: ToDoState = {
  List: [
    { text: 'mleko', checked: false, id: String(Math.random()) },
    { text: 'ser', checked: false, id: String(Math.random()) },
    { text: 'dżem', checked: false, id: String(Math.random()) },
  ],
  drag: 0,
  drop: 0,
};

const textReducer = createReducer(
  initialState,
  on(addAction, (state, args) => {
    const res = { List: [...state.List] };
    res.List.push(args);
    return res;
  }),
  on(deleteAction, (state, args) => {
    const res = { List: [...state.List] };
    const sought = res.List.findIndex((x) => x.id === args.id);
    res.List.splice(sought, 1);
    return res;
  }),
  on(editAction, (state, args) => {
    const res = { ...state };
    const sought = res.List.find((x) => x.id === args.id);
    console.log(sought);
    return res;
  }),
  on(changeAction, (state, args) => {
    const res = { List: [...state.List] };
    const index = res.List.findIndex((x) => x.id === args.id);
    res.List[index] = {
      ...res.List[index],
      ...args,
    };
    console.log(res);
    return res;
  }),
  on(checkedAction, (state, args) => {
    const res = { List: [...state.List] };
    console.log(res);
    const index = res.List.findIndex((x) => x.id === args.id);
    res.List[index] = {
      ...res.List[index],
      ...args,
    };
    return res;
  }),
  on(dragAndDropAction, (state, args) => {
    const res = { List: [...state.List] };
    moveItemInArray(res.List, args.drag, args.drop);
    return res;
  })
);

export function toDoReducer(state: ToDoState | undefined, action: Action) {
  return textReducer(state, action);
}
