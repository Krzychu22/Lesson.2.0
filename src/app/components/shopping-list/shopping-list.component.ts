import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ShoppingListService, TaskInterface} from '../../services/shopping-list.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  model = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    quantity: ['', [Validators.required, Validators.min(1)]],
    unit: ['', [Validators.required]],
  });
  @Input() units = ['kg', 'dag', 'l', 'butelka/i', 'sztuka/i'];
  _taskType = '';
  @Input() set taskType(type) {
    this._taskType = type;
    this.tasks$ = this.shoppingService.getTasks(this.taskType);
  };

  get taskType() {
    return this._taskType;
  }

  tasks$: Observable<Array<TaskInterface>>;

  isEdit = false;
  editedIndex = null;

  constructor(private fb: FormBuilder, private shoppingService: ShoppingListService, private cd: ChangeDetectorRef) {
  }

  /**
   * tu tworzą się zadania
   */
  addTask() {
    this.shoppingService.addTask({
      ...this.model.getRawValue(),
      type: this.taskType
    });
    this.model.reset();
  }

  /**
   * tu jest zniana stanu zrobone/ nie zrobione
   * @param index
   */
  onTaskDone(index: string) {
    this.shoppingService.toggleTaskDone(index);
  }

  ngOnInit(): void {
  }

  /**
   * tu jest reset
   */
  reset() {
    this.shoppingService.reset(this.taskType);
  }

  /**
   * tu jest usuwanie
   * @param what
   */
  delete(what: string) {
    this.shoppingService.delete(what);
  }

  /**
   * tu jest wywoływany do edytowania zadanie
   * @param what
   */
  edit(what: string) {
    this.model.patchValue(this.shoppingService.getTask(what));
    this.isEdit = true;
    this.editedIndex = what;
  }

  /**
   * zapisuje zmiany obecjie udytowanego task
   */
  change() {
    this.shoppingService.updateTask(this.model.getRawValue(), this.editedIndex);
    this.model.reset();
    this.isEdit = false;
  }
}
