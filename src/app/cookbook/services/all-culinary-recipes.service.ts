import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MealInterface} from '../type';

@Injectable({
  providedIn: 'root'
})
export class AllCulinaryRecipesService {
  meals$ = new BehaviorSubject<Array<MealInterface>>([{
    name: 'Śniadanie',
    mealId: 'S'
  }, {
    name: 'Zupa',
    mealId: 'Z'
  }, {
    name: 'Danie główne',
    mealId: 'DG'
  }, {
    name: 'Kolacja',
    mealId: 'K'
  }, {
    name: 'Deser',
    mealId: 'D'
  }, {
    name: 'Przystawka',
    mealId: 'P'
  }]);

  constructor() {
  }
}
