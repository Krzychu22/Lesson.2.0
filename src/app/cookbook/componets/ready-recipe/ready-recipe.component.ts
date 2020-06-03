import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FoodInRecipe, RecipeStep} from '../../type';
import {ActivatedRoute} from '@angular/router';
import {FoodsService} from '../../services/foods.service';
import {RecipeService} from '../../services/recipe.service';
import {MealService} from '../../services/meal.service';
import {FormBuilder} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {map, pluck, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-ready-recipe',
  templateUrl: './ready-recipe.component.html',
  styleUrls: ['./ready-recipe.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: {displayDefaultIndicatorType: false}
  }]
})
export class ReadyRecipeComponent implements OnInit {

  recipeId$ = this.route.params.pipe(pluck('recipeId'));
  realizations$: Observable<Array<RecipeStep>> = this.recipeId$.pipe(switchMap(recipeId => this.RecipeService.getRealizations(recipeId)));
  products$: Observable<Array<FoodInRecipe>> = this.recipeId$.pipe(switchMap(recipeId => this.FoodService.getProducts(recipeId)));
  meal$ = this.recipeId$.pipe(
    switchMap(recipeId =>
      this.MealService.recipes$.pipe(
        map(recipes => recipes.find(recipe => recipe.recipeId === recipeId))
      )
    ));
  name$ = this.meal$.pipe(pluck('name'));
  mealId$ = this.meal$.pipe(pluck('mealId'));

  // calories$ = this.products$.pipe(map(products => products.map(product => {
  //   product.foodId;
  //   const food = this.FoodService.getFood(product.foodId);
  //   return product.amount * food.calories;
  // }).reduce((previousValue, currentValue) => currentValue + previousValue)));

  calories$ = this.products$.pipe(map(products => products.reduce((prev, product) => {
    const food = this.FoodService.getFood(product.foodId);
    return product.amount * food.calories + prev;
  }, 0)));

  constructor(private FormBuilder: FormBuilder, private RecipeService: RecipeService, private MealService: MealService, private FoodService: FoodsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }
}
