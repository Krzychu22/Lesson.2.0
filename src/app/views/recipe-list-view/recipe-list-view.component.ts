import {Component, OnInit} from '@angular/core';
import {MealService} from '../../cookbook/services/meal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list-view',
  templateUrl: './recipe-list-view.component.html',
  styleUrls: ['./recipe-list-view.component.scss']
})
export class RecipeListViewComponent implements OnInit {

  recipes$ = this.service.getMeal('S');

  constructor(private service: MealService, private router: Router) {
  }

  ngOnInit(): void {
  }

}
