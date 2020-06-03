import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Allergies, FoodInterface} from '../../type';
import {FoodsService} from '../../services/foods.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-food-creation',
  templateUrl: './food-creation.component.html',
  styleUrls: ['./food-creation.component.scss']
})
export class FoodCreationComponent implements OnInit {

  foods$: Observable<Array<FoodInterface>> = this.foodService.foods$;
  allergies$: Observable<Array<Allergies>> = this.foodService.allergies$;

  @Input() modelFood = this.fb.group({
    name: ['', [Validators.required]],
    unit: ['', [Validators.required]],
    calories: ['', [Validators.required]],
    allergies: ['']
  });
  @Input() allowEdit = false;
  @Input() isEditFood = false;
  @Input() editedIndexFood = null;

  constructor(private foodService: FoodsService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  /**
   * tworzenie i edycja foods
   */
  addFood(details) {
    this.foodService.addFoods({
      ...details,
    });
  }

  deleteFood(index) {
    this.foodService.deleteFoods(index);
  }

  editFood(index) {
    this.modelFood.patchValue(this.foodService.getFood(index));
    this.isEditFood = true;
    this.editedIndexFood = index;
  }

  changeFood() {
    this.foodService.updateFoods(this.modelFood.getRawValue(), this.editedIndexFood);
    this.isEditFood = false;
  }
}
