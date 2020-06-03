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
  @Input() isCookInit = false;
  @Input() allowEdit = false;
  @Input() title = '';
  @Output() picked = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
