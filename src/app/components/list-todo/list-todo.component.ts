import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ListTodoService, ProjectInterface} from '../../services/list-todo.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {
  model = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]]
  });

  _listType = '';


  tasks$: Observable<Array<ProjectInterface>> = this.listTodoService.getTasks();

  get taskType() {
    return this._listType;
  }

  constructor(private fb: FormBuilder, private listTodoService: ListTodoService, private cd: ChangeDetectorRef) {
  }

  /**
   * tu tworzą się zadania
   */
  addTask() {
    if (this.model.invalid) {
      return;
    }
    this.listTodoService.addTask({
      ...this.model.getRawValue(),
      type: this.taskType
    });
    this.model.reset();
  }



  ngOnInit(): void {

  }

}
