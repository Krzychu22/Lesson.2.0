import {Injectable} from '@angular/core';
import {FoodsService} from './foods.service';
import {BehaviorSubject} from 'rxjs';
import {FoodInRecipe, FoodInterface} from '../type';


@Injectable({
  providedIn: 'root'
})
export class FoodsFakeService extends FoodsService {

  foods$ = new BehaviorSubject<Array<FoodInterface>>([{
    name: 'pomidory',
    allergies: '',
    calories: 10,
    foodId: 'a1',
    unit: 'szt'
  }, {
    name: 'mleko kokosowe z domieszką makówki',
    allergies: '',
    calories: 20,
    foodId: 'b1',
    unit: 'ml'
  }, {
    name: 'ryż',
    allergies: '',
    calories: 10,
    foodId: 'c1',
    unit: 'g'
  }, {
    name: 'woda',
    allergies: '',
    calories: 0,
    foodId: 'd1',
    unit: 'ml'
  },{
    name: 'pomidory',
    allergies: '',
    calories: 10,
    foodId: 'a1',
    unit: 'szt'
  }, {
    name: 'mleko kokosowe z domieszką makówki',
    allergies: '',
    calories: 20,
    foodId: 'b1',
    unit: 'ml'
  }, {
    name: 'ryż',
    allergies: '',
    calories: 10,
    foodId: 'c1',
    unit: 'g'
  }, {
    name: 'woda',
    allergies: '',
    calories: 0,
    foodId: 'd1',
    unit: 'ml'
  },{
    name: 'pomidory',
    allergies: '',
    calories: 10,
    foodId: 'a1',
    unit: 'szt'
  }, {
    name: 'mleko kokosowe z domieszką makówki',
    allergies: '',
    calories: 20,
    foodId: 'b1',
    unit: 'ml'
  }, {
    name: 'ryż',
    allergies: '',
    calories: 10,
    foodId: 'c1',
    unit: 'g'
  }, {
    name: 'woda',
    allergies: '',
    calories: 0,
    foodId: 'd1',
    unit: 'ml'
  }]);

  products$ = new BehaviorSubject<Array<FoodInRecipe>>([{
    amount: 8,
    foodId: 'a1',
    recipeId: 'a2',
  }, {
    amount: 70,
    foodId: 'b1',
    recipeId: 'b2',
  }, {
    amount: 67,
    foodId: 'c1',
    recipeId: 'c2',
  }, {
    amount: 56,
    foodId: 'd1',
    recipeId: 'd2',
  },{
    amount: 8,
    foodId: 'a1',
    recipeId: 'a2',
  }, {
    amount: 70,
    foodId: 'b1',
    recipeId: 'b2',
  }, {
    amount: 67,
    foodId: 'c1',
    recipeId: 'c2',
  }, {
    amount: 56,
    foodId: 'd1',
    recipeId: 'd2',
  },]);

}
