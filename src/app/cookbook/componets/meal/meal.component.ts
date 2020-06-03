import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Allergies, RecipeInterface} from '../../type';
import {combineLatest, Observable} from 'rxjs';
import {MealService} from '../../services/meal.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first, map, pluck, startWith, switchMap} from 'rxjs/operators';
import {AllCulinaryRecipesService} from '../../services/all-culinary-recipes.service';
import {FoodsService} from '../../services/foods.service';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  model = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(1)]],
  });
  toppings = new FormControl();
  mealId$ = this.route.params.pipe(pluck('mealId'));
  recipes$: Observable<Array<RecipeInterface>> = combineLatest([ // strumyczek przepisów wyświetlanych użytkownikowi jest równy combineLatest
    this.mealId$.pipe(switchMap(mealId => // ze strumyczna mealdId$ przełączam strumyczek na
      this.recipeService.getMeal(mealId))), // repipeServise zwracany z funkcji getMeal dla wartości mealId
    this.toppings.valueChanges.pipe(startWith([]))]). // strumyczka zaznaczonymi przez użytkownika alergenami, strumyczek startuje pustą tablicą
    pipe(map(([recipes, allergies]) => { // z strumyczków w combineLatest jest tworzona mapa przepisów i alergii zaznaczonych
      if (allergies.length === 0) {
        return recipes;
      }
      return recipes.filter(recipe => {
        const recipeAllergies = this.FoodService.allergiesInRecipe(recipe.recipeId);
        return recipeAllergies.filter(allergen => allergies.indexOf(allergen) === -1).length === recipeAllergies.length;
      });
    }));
  name$ = this.mealId$.pipe(
    switchMap(mealId =>
      this.culinaryService.meals$.pipe(
        map(meals => meals.find(meal => meal.mealId === mealId))
      )
    ),
    pluck('name'));
  isEdit = false;
  editedIndex = null;
  allergies$: Observable<Array<Allergies>> = this.FoodService.allergies$;

  constructor(private fb: FormBuilder, private recipesService: RecipeService, private recipeService: MealService, private FoodService: FoodsService, private culinaryService: AllCulinaryRecipesService, private cd: ChangeDetectorRef, private route: ActivatedRoute, private router: Router) {

  }

  addRecipe() {
    if (this.model.invalid) {
      return;
    }

    this.mealId$.pipe(first()).subscribe((mealId) => {
      const recipeId = this.recipeService.addRecipe({
        ...this.model.getRawValue(),
        mealId: mealId,
      });
      this.model.reset();
      this.router.navigate(['/NotReadyRecipe', recipeId]);

    });
  }

  delete(what) {
    this.recipeService.delete(what);
  }

  edit(what: string) {
    this.model.patchValue(this.recipeService.getRecipe(what));
    this.isEdit = true;
    this.editedIndex = what;
  }

  change() {
    this.recipeService.updateRecipe(this.model.getRawValue(), this.editedIndex);
    this.model.reset();
    this.isEdit = false;
  }

  ngOnInit(): void {

  }
}
