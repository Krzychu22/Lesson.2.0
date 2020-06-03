import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FoodInRecipe, FoodInterface, RecipeStep} from '../../type';
import {RecipeService} from '../../services/recipe.service';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {FormBuilder, Validators} from '@angular/forms';
import {FoodsService} from '../../services/foods.service';
import {first, map, pluck, switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {MealService} from '../../services/meal.service';
import {AllCulinaryRecipesService} from '../../services/all-culinary-recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  modelRealization = this.fb.group({
    content: ['', [Validators.required, Validators.minLength(1)]],
  });

  modelFood = this.fb.group({
    amount: ['', [Validators.required]],
    foodId: ['', [Validators.required]],
  });

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

  foods$: Observable<Array<FoodInterface>> = this.FoodService.foods$;
  isEditRealization = false;
  isEditFood = false;
  editedIndexRealization = null;
  editedIndexFood = null;
  blockingDrop = false;
  unit$ = this.modelFood.controls.foodId.valueChanges.pipe(map(value => this.FoodService.getFood(value)?.unit));

  constructor(private fb: FormBuilder, private CulinaryService: AllCulinaryRecipesService, private RecipeService: RecipeService, private MealService: MealService, private FoodService: FoodsService, private route: ActivatedRoute) {
  }

  /**
   * produkty
   */
  addProduct() {
    if (this.modelFood.invalid) {
      return;
    }
    this.recipeId$.pipe(first()).subscribe((recipeId) => {
      this.FoodService.addProduct({
        ...this.modelFood.getRawValue(),
        recipeId: recipeId,
      });
    });
    this.modelFood.reset();
  }

  deleteProduct(index) {
    this.FoodService.deleteProduct(index);
  }

  editProduct(index) {
    this.blockingDrop = true;
    this.modelFood.patchValue(this.FoodService.getProduct(index));
    this.isEditFood = true;
    this.editedIndexFood = index;
  }

  changeProduct() {
    this.FoodService.updateProduct(this.modelFood.getRawValue(), this.editedIndexFood);
    this.modelFood.reset();
    this.isEditFood = false;
    this.blockingDrop = false;
  }

  /**
   * wykonanie
   */
  dropRealization(event: CdkDragDrop<string[]>) {
    if (this.blockingDrop === false) {
      this.RecipeService.dropRealization(event);
    }
  }

  addRealization() {
    if (this.modelRealization.invalid) {
      return;
    }
    this.recipeId$.pipe(first()).subscribe((recipeId) => {
      this.RecipeService.addRealization({
        ...this.modelRealization.getRawValue(),
        recipeId: recipeId,
      });
    });
    this.modelRealization.reset();
  }

  deleteRealization(what) {
    this.RecipeService.deleteRealization(what);
  }

  editRealization(what: string) {
    this.modelRealization.patchValue(this.RecipeService.getRealization(what));
    this.isEditRealization = true;
    this.editedIndexRealization = what;
    this.blockingDrop = true;
  }

  changeRealization() {
    this.RecipeService.updateRealization(this.modelRealization.getRawValue(), this.editedIndexRealization);
    this.modelRealization.reset();
    this.isEditRealization = false;
    this.blockingDrop = false;
  }

  ngOnInit(): void {
  }

}
