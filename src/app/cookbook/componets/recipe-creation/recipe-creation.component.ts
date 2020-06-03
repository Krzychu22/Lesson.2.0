import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FoodInRecipe, FoodInterface, HashtagInterface, RecipeStep} from '../../type';
import {BehaviorSubject, Observable} from 'rxjs';
import {FoodsService} from '../../services/foods.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {RecipeService} from '../../services/recipe.service';
import {MealService} from '../../services/meal.service';
import {AllCulinaryRecipesService} from '../../services/all-culinary-recipes.service';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-recipe-creation',
  templateUrl: './recipe-creation.component.html',
  styleUrls: ['./recipe-creation.component.scss']
})
export class RecipeCreationComponent implements OnInit {

  recipeId$ = new BehaviorSubject(null);
  foods$: Observable<Array<FoodInterface>> = this.foodsService.foods$;
  products$: Observable<Array<FoodInRecipe>> = this.foodsService.products$;
  realization$: Observable<Array<RecipeStep>> = this.recipeService.realization$;
  hashtag$: Observable<Array<HashtagInterface>> = this.recipeService.hashtag$;
  // products$: Observable<Array<FoodInRecipe>> = this.recipeId$.pipe(switchMap(recipeId => this.foodsService.getProducts(recipeId)));
  _recipeId: string;

  @Input() modelTitle = this.fb.group({
    name: ['', [Validators.required]],
    recipeId: ['', [Validators.required]],
  });

  @Input() set recipeId(recipeId) {
    this.recipeId$.next(recipeId);
    this._recipeId = recipeId;
  }

  @Input() modelFood = this.fb.group({
    amount: ['', [Validators.required]],
    foodId: ['', [Validators.required]],
  });
  unit$ = this.modelFood.controls.foodId.valueChanges.pipe(map(value => this.foodsService.getFood(value)?.unit));

  @Input() modelRealization = this.fb.group({
    content: ['', [Validators.required]],
  });
  @Input() modelHashtag = this.fb.group({
    hashtag: ['', [Validators.required]],
  });
  @Output() add = new EventEmitter();
  @Output() saveRecipe = new EventEmitter();
  @Output() back = new EventEmitter();
  @Input() allowEdit = false;
  @Input() isEditFood = false;
  @Input() isEditRealization = false;
  @Input() isEditHashtag = false;
  @Input() blockingDrop = false;
  @Input() editedIndexFood: null;
  @Input() editedIndexRealization: string;

  constructor(public foodsService: FoodsService, private recipeService: RecipeService, private mealService: MealService,
              private allCulinaryRecipesService: AllCulinaryRecipesService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
  }

  /**
   * tworzenie i usówanie hashtagów przepisu
   */
  addHashtag(details) {
    this.recipeService.addHashtag({
      ...details,
      recipeId: this._recipeId,
    });
  }

  deleteHashtag(index) {
    this.recipeService.deleteHashtag(index);
  }

  /**
   * tworzenie i edycja produktów
   */
  addProduct(details) {
    this.foodsService.addProduct({
      ...details,
      recipeId: this._recipeId,
    });
  }

  changeProduct() {
    this.foodsService.updateProduct(this.modelFood.getRawValue(), this.editedIndexFood);
    this.isEditFood = false;
    this.blockingDrop = false;
  }

  deleteProduct(index) {
    this.foodsService.deleteProduct(index);

  }

  editProduct(index) {
    this.blockingDrop = true;
    this.isEditFood = true;
    this.editedIndexFood = index;
    this.modelFood.patchValue(this.foodsService.getProduct(index));
  }

  /**
   * tworzenie i edycja podpunków przepisu
   */
  addRealization(details) {

    this.recipeService.addRealization({
      ...details,
      recipeId: this._recipeId,
    });
  }

  deleteRealization(what) {
    this.recipeService.deleteRealization(what);
  }

  editRealization(what: string) {
    this.modelRealization.patchValue(this.recipeService.getRealization(what));
    this.isEditRealization = true;
    this.editedIndexRealization = what;
    this.blockingDrop = true;
  }

  changeRealization() {
    this.recipeService.updateRealization(this.modelRealization.getRawValue(), this.editedIndexRealization);
    this.isEditRealization = false;
    this.blockingDrop = false;
  }

  dropRealization(event: CdkDragDrop<string[]>) {
    if (this.blockingDrop === false) {
      this.recipeService.dropRealization(event);
    }
  }


}
