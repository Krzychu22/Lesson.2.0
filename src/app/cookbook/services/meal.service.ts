import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {RecipeInterface} from '../type';
import * as cuid from 'cuid';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  recipes$ = new BehaviorSubject<Array<RecipeInterface>>([]);

  constructor() {
    if (!!localStorage.meal) {

      this.recipes$.next(JSON.parse(localStorage.meal));
    }
    this.recipes$.subscribe(tasks => {
      localStorage.meal = JSON.stringify(tasks);
    });
  }

  /**
   * tu jest wyciądanie strumyczka z dokładnym typem meal
   * @param mealId
   */
  getMeal(mealId) {
    return this.recipes$.pipe(map(tasks => {
      return tasks.filter(task => {
        return task.mealId === mealId;
      });
    }));
  }

  /**
   * nazwa przepisu
   * @param recipe
   */
  addRecipe(recipe: RecipeInterface) {
    const recipeId = cuid();
    const current = this.recipes$.value;
    current.push({
      ...recipe,
      recipeId
    });
    this.recipes$.next(current);
    return recipeId;
  }

  /**
   * bla bla bla
   * @param recipeId
   */
  delete(recipeId: string) {
    const current = this.recipes$.value;
    const what = this.recipes$.value.findIndex(recipe => recipe.recipeId === recipeId);
    current.splice(what, 1);
    this.recipes$.next(current);
  }

  getRecipe(recipeId: string) {
    return this.recipes$.value.find(task => task.recipeId === recipeId);
  }

  updateRecipe(updatedRecipe: Partial<RecipeInterface>, recipeId: string) {
    const current = this.recipes$.value;
    const index = current.findIndex(task => task.recipeId === recipeId);
    current[index] = {
      ...current[index],
      ...updatedRecipe
    };
    this.recipes$.next(current);
  }
}
