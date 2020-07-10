import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {RecipeInterface} from '../type';
import {MealService} from './meal.service';


@Injectable({
  providedIn: 'root'
})
export class MealFakeService extends MealService {
  recipes$ = new BehaviorSubject<Array<RecipeInterface>>([
    {
      name: 'naleśniki',
      recipeId: 'a1',
      like: true,
      mealId: 'a1',
      realization: [],
      components: []
    }, {
      name: 'płatki z mlekiem',
      recipeId: 'a1',
      like: true,
      mealId: 'a1',
      realization: [],
      components: []
    }, {
      name: 'gulasz',
      recipeId: 'a1',
      like: true,
      mealId: 'a1',
      realization: [],
      components: []
    }, {
      name: 'rosół',
      recipeId: 'a1',
      like: true,
      mealId: 'a1',
      realization: [],
      components: []
    },
  ]);
}
