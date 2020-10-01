import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ToDoState } from './NgRx/reducers';
import {
  addAction,
  changeAction,
  checkedAction,
  deleteAction,
  dragAndDropAction,
  editAction,
} from './NgRx/actions';
import { selectToDo } from './NgRx/selector';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  currentValue$ = this.store.pipe(select(selectToDo));
  isEdit = false;
  changeText = '';

  constructor(private store: Store<{ todo: ToDoState }>) {}

  ngOnInit(): void {}

  add(current: string) {
    this.store.dispatch(
      addAction({ text: current, id: String(Math.random()), checked: false })
    );
  }

  change(current: string) {
    this.store.dispatch(changeAction({ text: current, id: this.changeText }));
    this.isEdit = false;
  }

  delete(current: string) {
    this.store.dispatch(deleteAction({ id: current }));
  }

  edit(current: string) {
    this.store.dispatch(editAction({ id: current }));
    this.changeText = current;
    this.isEdit = true;
  }

  checked(id: string, checked: boolean) {
    this.store.dispatch(checkedAction({ id, checked: !checked }));
  }
  drop(event: CdkDragDrop<string[]>) {
    this.store.dispatch(
      dragAndDropAction({ drag: event.previousIndex, drop: event.currentIndex })
    );
  }
}
