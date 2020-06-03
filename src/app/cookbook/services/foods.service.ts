import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Allergies, FoodInRecipe, FoodInterface} from '../type';
import * as cuid from 'cuid';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  foods$ = new BehaviorSubject<Array<FoodInterface>>([]);
  products$ = new BehaviorSubject<Array<FoodInRecipe>>([]);
  allergies$ = new BehaviorSubject<Array<Allergies>>([
    {allergies: 'dwutlenek siarki'},
    {allergies: 'gluten'},
    {allergies: 'gorczyca'},
    {allergies: 'jaja'},
    {allergies: 'laktoza'},
    {allergies: 'łubin'},
    {allergies: 'mięczaki'},
    {allergies: 'mleko'},
    {allergies: 'nasiona sezamu'},
    {allergies: 'orzechy'},
    {allergies: 'orzechy ziemne'},
    {allergies: 'ryby'},
    {allergies: 'seler'},
    {allergies: 'skorupiaki'},
    {allergies: 'soja'}]);

  constructor() {
    if (!!localStorage.foods) {
      this.foods$.next(JSON.parse(localStorage.foods));
    }
    this.foods$.subscribe(tasks => {
      localStorage.foods = JSON.stringify(tasks);
    });
    if (!!localStorage.products) {
      this.products$.next(JSON.parse(localStorage.products));
    }
    this.products$.subscribe(tasks => {
      localStorage.products = JSON.stringify(tasks);
    });
  }

  reload() {

  }

  /**
   * tu jest wyciądanie strumyczka z dokładnym typem
   * @param recipeId
   */
  getProducts(recipeId) {
    return this.products$.pipe(map(tasks => {
      return tasks.filter(task => {
        return task.recipeId === recipeId;
      });
    }));
  }

  /**
   * tu są tworzone produkty
   * @param food
   */
  addFoods(food: FoodInterface) {

    const current = this.foods$.value;
    current.push({
      ...food,
      foodId: cuid()
    });
    this.foods$.next(current);
  }

  deleteFoods(foodId: string) {
    this.deleteProduct(foodId);
    const current = this.foods$.value;
    const what = this.foods$.value.findIndex(recipe => recipe.foodId === foodId);
    current.splice(what, 1);
    this.foods$.next(current);
  }

  getFood(foodId: string) {
    console.log(foodId);
    return this.foods$.value.find(task => task.foodId === foodId);
  }

  updateFoods(updatedFood: Partial<FoodInterface>, foodId: string) {
    const current = this.foods$.value;
    const index = current.findIndex(task => task.foodId === foodId);
    current[index] = {
      ...current[index],
      ...updatedFood
    };
    this.foods$.next(current);
  }

  /**
   * tu są tworzone składniki w przepisie
   * @param food
   */
  addProduct(food: FoodInRecipe) {
    const current = this.products$.value;
    current.push(food);
    this.products$.next(current);
  }

  deleteProduct(foodId: string) {
    const current = this.products$.value;
    const what = this.products$.value.findIndex(recipe => recipe.foodId === foodId);
    current.splice(what, 1);
    this.products$.next(current);
  }

  getProduct(foodId: string) {
    console.log(foodId);
    return this.products$.value.find(task => task.foodId === foodId);
  }

  updateProduct(updatedProducts: Partial<FoodInRecipe>, foodId: string) {
    const current = this.products$.value;
    const Index = current.findIndex(task => task.foodId === foodId);
    current[Index] = {
      ...current[Index],
      ...updatedProducts
    };
    this.products$.next(current);
  }

  allergiesInRecipe(recipeId: string) {
    const productsList = this.products$.value.filter(task => task.recipeId === recipeId);
    return productsList.map(food =>
      this.foods$.value.find(currentFood =>
        currentFood.foodId === food.foodId).allergies);

  }

}
