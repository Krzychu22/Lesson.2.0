import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FoodInRecipe, FoodInterface} from '../../type';
import {FormBuilder, Validators} from '@angular/forms';
import {FoodsService} from '../../services/foods.service';

@Component({
  selector: ' app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {


  @Input() model = this.fb.group({
    amount: ['', [Validators.required]],
    foodId: ['', [Validators.required]],
  });

  @Input() products: Array<FoodInRecipe>;
  @Input() foods: Array<FoodInterface>;
  @Input() isEditFood = false;
  @Output() add = new EventEmitter();
  @Output() change = new EventEmitter();
  @Input() allowEdit = false;
  @Input() unit: string;

  constructor(private fb: FormBuilder, private FoodService: FoodsService) {
  }

  ngOnInit(): void {
  }

}
