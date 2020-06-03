import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FoodInRecipe, HashtagInterface, RecipeStep} from '../type';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import * as cuid from 'cuid';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  realization$ = new BehaviorSubject<Array<RecipeStep>>([]);
hashtag$ = new BehaviorSubject<Array<HashtagInterface>>([])
  constructor() {
    if (!!localStorage.realizations) {

      this.realization$.next(JSON.parse(localStorage.realizations));
    }
    this.realization$.subscribe(tasks => {
      localStorage.realizations = JSON.stringify(tasks);
    });
    if (!!localStorage.hashtags) {

      this.hashtag$.next(JSON.parse(localStorage.hashtags));
    }
    this.hashtag$.subscribe(tasks => {
      localStorage.hashatgs = JSON.stringify(tasks);
    });
  }
  /**
   * tu jest wyciądanie strumyczka z dokładnym typem
   * @param recipeId
   */
  getRealizations(recipeId) {
    return this.realization$.pipe(map(tasks => {
      return tasks.filter(task => {
        return task.recipeId === recipeId;
      });
    }));
  }

  dropRealization(event: CdkDragDrop<string[]>) {
    const current = this.realization$.value;
    moveItemInArray(current, event.previousIndex, event.currentIndex);
    this.realization$.next(current);
  }

  addRealization(realization: RecipeStep) {
    const current = this.realization$.value;
    current.push({
      ...realization,
      realizationId: cuid()
    });
    this.realization$.next(current);
  }

  deleteRealization(realizationId: string) {
    const current = this.realization$.value;
    const what = this.realization$.value.findIndex(recipe => recipe.realizationId === realizationId);
    current.splice(what, 1);
    this.realization$.next(current);
  }

  getRealization(realizationId: string) {
    return this.realization$.value.find(task => task.realizationId === realizationId);
  }

  updateRealization(updatedRealization: Partial<RecipeStep>, realizationId: string) {
    const current = this.realization$.value;
    const index = current.findIndex(task => task.realizationId === realizationId);
    current[index] = {
      ...current[index],
      ...updatedRealization
    };
    this.realization$.next(current);
  }
  addHashtag(hashtag: HashtagInterface) {
    const current = this.hashtag$.value;
    current.push(hashtag);
    this.hashtag$.next(current);
  }
  deleteHashtag(recipeId: string) {
    const current = this.hashtag$.value;
    const what = this.hashtag$.value.findIndex(recipe => recipe.recipeId === recipeId);
    current.splice(what, 1);
    this.hashtag$.next(current);
  }
}
