import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {TaskInterface, TodoService} from '../../services/todo.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  model = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]]
  });
  showDone$ = new BehaviorSubject(false);

  set showDone(done) {
    this.showDone$.next(done);
  }

  get showDone() {

    return this.showDone$.value;
  }

  _projectId = '';
  @Input() set projectId(projectId) {
    this._projectId = projectId;
    this.tasks$ = this.todoService.getTasks(this.projectId);
  };

  get projectId() {
    return this._projectId;
  }

  tasks$: Observable<Array<TaskInterface>>;
  filteredTasks$ = this.showDone$.pipe(
    switchMap((showDone) => this.tasks$.pipe(
      map((tasks) => {
        if (showDone) {
          return tasks;
        }
        return tasks.filter(value => !value.isDone);
      }))));

  constructor(private fb: FormBuilder, private todoService: TodoService, private cd: ChangeDetectorRef, private route: ActivatedRoute) {
  }

  /**
   * tu tworzą się zadania
   */
  addTask() {
    this.todoService.addTask({
      ...this.model.getRawValue(),
      projectId: this.projectId
    });
    this.model.reset();
  }

  /**
   * tu jest zniana stanu zrobone/ nie zrobione
   * @param index
   */
  onTaskDone(index: string) {
    this.todoService.toggleTaskDone(index);
  }

  ngOnInit(): void {
    this.route.params.subscribe(({projectId}) => {
      console.log(projectId);
      this.projectId = projectId;
    });
    // this.route.queryParams.subscribe(params => {
    //   console.log(params);
    // });
  }

}
