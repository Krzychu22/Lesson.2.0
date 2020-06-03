import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FoodInRecipe, FoodInterface} from '../../type';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  @Input() foods: Array<FoodInterface>;
  @Input() allowEdit = false;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
