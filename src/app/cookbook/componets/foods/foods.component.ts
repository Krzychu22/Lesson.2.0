import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {FoodInterface, Allergies} from '../../type';
import {FoodsService} from '../../services/foods.service';
import {ActivatedRoute} from '@angular/router';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {

  allergies$: Observable<Array<Allergies>> = this.FoodService.allergies$;

  model = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    unit: ['', [Validators.required, Validators.minLength(1)]],
    calories: ['', [Validators.required]],
    allergies: ['']
  });

  _listRecipes = '';

  get foodsType() {
    return this._listRecipes;
  }

  foods$: Observable<Array<FoodInterface>> = this.FoodService.foods$;

  isEdit = false;
  editedIndex = null;

  recipeId$ = this.route.queryParams.pipe(pluck('recipeId'));
  constructor(private fb: FormBuilder, private FoodService: FoodsService, private route: ActivatedRoute) {
  }
  addFoods() {
    if (this.model.invalid) {
      return;
    }
    this.FoodService.addFoods({
      ...this.model.getRawValue(),
      type: this.foodsType
    });
    this.model.reset();
  }
  deleteFoods(what){
    this.FoodService.deleteFoods(what)
  }

  editFoods(what: string) {
    this.model.patchValue(this.FoodService.getFood(what));
    this.isEdit = true;
    this.editedIndex = what;
  }
  changeFoods() {
    this.FoodService.updateFoods(this.model.getRawValue(), this.editedIndex);
    this.model.reset();
    this.isEdit = false;
  }
  ngOnInit(): void {
  }
}
