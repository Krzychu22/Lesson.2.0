import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {RecipeInterface} from '../../type';
import {MealService} from '../../services/meal.service';


@Component({
  selector: 'app-all-recipe-list',
  templateUrl: './all-recipe-list.component.html',
  styleUrls: ['./all-recipe-list.component.scss']
})
export class AllRecipeListComponent implements OnInit {

  recipes$: Observable<Array<RecipeInterface>> = this.recipesService.recipes$;


  @Output() back = new EventEmitter();
  @Output() picked = new EventEmitter();
  @Output() LikeDislike = new EventEmitter();

  constructor(private recipesService: MealService) { }

  ngOnInit(): void {
  }

}
