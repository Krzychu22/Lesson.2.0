import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HashtagInterface} from '../../type';

@Component({
  selector: 'app-recipe-hashtag-list',
  templateUrl: './recipe-hashtag-list.component.html',
  styleUrls: ['./recipe-hashtag-list.component.scss']
})
export class RecipeHashtagListComponent implements OnInit {

  @Input() hashtags: Array<HashtagInterface>;
  @Input() isEditHashtag = false;
  @Output() delete = new EventEmitter();
  @Input() allowEdit = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
