import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeInterface} from '../../type';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Input() recipes: Array<RecipeInterface>;
  @Input() isSearch = false;
  @Input() isPicker = false;
  @Input() like = false;
  @Input() isCookInit = false;
  @Input() allowEdit = false;
  @Output() picked = new EventEmitter();
  @Output() LikeDislike = new EventEmitter();

  constructor() {
  }

  dynamicSort(property) {
    var sortOrder = 1;

    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }

    return function(a, b) {
      if (sortOrder === -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    };
  }

  ngOnInit(): void {
  this.recipes.sort(this.dynamicSort('name'));
  }

}
