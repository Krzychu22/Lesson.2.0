import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {FoodInRecipe, FoodInterface, HashtagInterface, RecipeStep} from '../../type';
import {FoodsService} from '../../services/foods.service';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-finished',
  templateUrl: './recipe-finished.component.html',
  styleUrls: ['./recipe-finished.component.scss']
})
export class RecipeFinishedComponent implements OnInit {

  foods$: Observable<Array<FoodInterface>> = this.foodsService.foods$;
  products$: Observable<Array<FoodInRecipe>> = this.foodsService.products$;
  realization$: Observable<Array<RecipeStep>> = this.recipeService.realization$;
  hashtag$: Observable<Array<HashtagInterface>> = this.recipeService.hashtag$;

  @Input() allowEdit = false;
  @Input() listHashtag = false;
  @Output() back = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor(public foodsService: FoodsService, private recipeService: RecipeService) {
  }

  ngOnInit(): void {
  }

}
