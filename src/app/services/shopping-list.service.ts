import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import * as cuid from 'cuid';

export interface TaskInterface {
  title: string;
  quantity: string;
  unit: string;
  isDone: boolean;
  type: string;
  taskId: string;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  tasks$ = new BehaviorSubject<Array<TaskInterface>>([]);

  constructor() {
    if (!!localStorage.shoppingList) {

      this.tasks$.next(JSON.parse(localStorage.shoppingList));
    }
    this.tasks$.subscribe(tasks => {
      localStorage.shoppingList = JSON.stringify(tasks);
    });
  }

  /**
   * tu są wszystkie zadania
   */
  getAllTasks() {
    return this.tasks$;
  }

  /**
   * tu jest wyciądanie strumyczka z dokładnym typem
   * @param type
   */
  getTasks(type) {
    return this.tasks$.pipe(map(tasks => {
      return tasks.filter(task => {
        return task.type === type;
      });
    }));
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
   * tu jest zmieniane zrobione/nie zrobione
   * @param taskId
   */
  toggleTaskDone(taskId: string) {
    this.updateTask({
      isDone: !this.getTask(taskId).isDone
    }, taskId);
  }

  /**
   * tu jest znajdywanie dokładnego strumyczna z zadaniem które chce wybrać
   * @param taskId test param commet
   */
  getTask(taskId: string) {
    return this.tasks$.value.find(task => task.taskId === taskId);
  }

  /**
   * tu jest reset
   * @param type
   */
  reset(type) {
    const current = this.tasks$.value;
    this.tasks$.next(current.filter(task => {
      return task.type !== type;
    }));
  }

  /**
   * tu jest usuwanie
   * @param taskId
   */
  delete(taskId: string) {
    const current = this.tasks$.value;
    const what = this.tasks$.value.findIndex(task => task.taskId === taskId);
    current.splice(what, 1);
    this.tasks$.next(current);
  }
}
