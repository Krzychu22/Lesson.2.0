import {ChangeDetectorRef, Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import * as cuid from 'cuid';
import {BehaviorSubject} from 'rxjs';

export interface TaskInterface {
  title: string;
  isDone: boolean;
  projectId: string;
  taskId: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tasks$ = new BehaviorSubject<Array<TaskInterface>>([]);

  constructor() {
    if (!!localStorage.todo) {

      this.tasks$.next(JSON.parse(localStorage.todo));
    }
    this.tasks$.subscribe(tasks => {
      localStorage.todo = JSON.stringify(tasks);
    });
  }

  /**
   * tu jest wyciądanie strumyczka z dokładnym typem
   * @param projectId
   */
  getTasks(projectId) {
    return this.tasks$.pipe(map(tasks => {
      return tasks.filter(task => {
        return task.projectId === projectId;
      });
    }));
  }

  /**
   * tu jest znajdowwany który jest zmieniany i podniuniamy
   * @param updatedTask
   * @param taskId
   */
  updateTask(updatedTask: Partial<TaskInterface>, taskId: string) {
    const current = this.tasks$.value;
    const index = current.findIndex(task => task.taskId === taskId);
    current[index] = {
      ...current[index],
      ...updatedTask
    };
    this.tasks$.next(current);
  }

  /**
   * tu jest znajdywanie dokładnego strumyczna z zadaniem które chce wybrać
   * @param taskId test param commet
   */
  getTask(taskId: string) {
    return this.tasks$.value.find(task => task.taskId === taskId);
  }

  /**
   * tu jest tworzone zadanie i dadane mu Id
   * @param task
   */
  addTask(task: TaskInterface) {
    const current = this.tasks$.value;
    current.push({
      ...task,
      isDone: false,
      taskId: cuid()
    });
    this.tasks$.next(current);
  }

  /**
   * tu jest zmieniane zrobione/nie zrobione
   * @param taskId
   */
  toggleTaskDone(taskId: string) {
    this.updateTask({
      isDone: !this.getTask(taskId).isDone
    }, taskId);
  }
}
