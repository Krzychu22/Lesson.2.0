import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeInterface} from '../../type';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-list-with-search',
  templateUrl: './list-with-search.component.html',
  styleUrls: ['./list-with-search.component.scss']
})
export class ListWithSearchComponent implements OnInit {
  _recipes: Array<RecipeInterface> = [];
  count = 0;
  @Output() picked = new EventEmitter();
  @Input() set recipes(recipes) {
    this._recipes = recipes;
    this.searchResult$.next(recipes);
  }


  get recipes() {
    return this._recipes;
  }

  searchResult$ = new BehaviorSubject(this.recipes);

  constructor() {
  }

  ngOnInit(): void {

  }

}
