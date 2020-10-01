import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodInRecipe, FoodInterface } from '../../type';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Input() products: Array<FoodInRecipe>;
  @Input() foods: Array<FoodInterface>;
  @Input() allowEdit = false;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
