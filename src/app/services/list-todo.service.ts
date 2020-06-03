import {ChangeDetectorRef, Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import * as cuid from 'cuid';
import {BehaviorSubject} from 'rxjs';

export interface ProjectInterface {
  title: string;
  isDone: boolean;
  type: string;
  projectId: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListTodoService {
  tasks$ = new BehaviorSubject<Array<ProjectInterface>>([]);

  constructor() {
    if (!!localStorage.listTodo) {

      this.tasks$.next(JSON.parse(localStorage.listTodo));
    }
    this.tasks$.subscribe(tasks => {
      localStorage.listTodo = JSON.stringify(tasks);
    });
  }

  /**
   * tu jest wyciądanie strumyczka z dokładnym typem
   * @p
   */
  getTasks() {
    return this.tasks$.pipe(map(tasks => {
      return tasks.filter(task => {
        return task.type;
      });
    }));
  }

  /**
   * tu jest znajdowwany który jest zmieniany i podniuniamy
   * @param updatedTask
   * @param taskId
   */
  updateTask(updatedTask: Partial<ProjectInterface>, taskId: string) {
    const current = this.tasks$.value;
    const index = current.findIndex(task => task.projectId === taskId);
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
    return this.tasks$.value.find(task => task.projectId === taskId);
  }

  /**
   * tu jest tworzone zadanie i dadane mu Id
   * @param task
   */
  addTask(task: ProjectInterface) {
    const current = this.tasks$.value;
    current.push({
      ...task,
      isDone: false,
      projectId: cuid()
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
