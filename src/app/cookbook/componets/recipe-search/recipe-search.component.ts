import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {RecipeInterface} from '../../type';
import {FormBuilder} from '@angular/forms';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent implements OnInit {
  model = this.fb.group({
    query: [],
    allergens: [[]],
    tags: [[]]
  });
  @Input() hasHints: boolean = true;
  @Input() allergens: Array<string> = [];
  @Input() tag: Array<string> = [];
  @Input() recipes: Array<RecipeInterface> = [];
  @Output() result = new EventEmitter<Array<RecipeInterface>>();
  @Output() pickedRecipe = new EventEmitter<string>();

  hints$ = new BehaviorSubject<Array<{ name: string; recipeId: string }>>([]);

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.model.valueChanges.subscribe(({query}) => {
      let result = null;
      if (query.length > 0 && query) {
        const options = {
          // Search in `author` and in `tags` array
          keys: ['name']
        };
        const fuse = new Fuse(this.recipes, options);

        result = fuse.search(query).map(({item}) => item);
      } else {
        result = this.recipes;
      }
      if (this.hasHints) {

        this.hints$.next(result);
      } else {
        this.result.emit(result);
      }
    });
  }

}
