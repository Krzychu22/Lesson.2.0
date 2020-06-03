import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HashtagInterface} from '../../type';
import Fuse from 'fuse.js';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-recipe-hashtag-add',
  templateUrl: './recipe-hashtag-add.component.html',
  styleUrls: ['./recipe-hashtag-add.component.scss']
})
export class RecipeHashtagAddComponent implements OnInit {

  @Input() model = this.fb.group({
    hashtag: ['', [Validators.required]],
  });
  @Output() add = new EventEmitter();
  @Input() hashtags: Array<HashtagInterface> = [];
  @Input() allowEdit = false;

  suggestions$ = new BehaviorSubject<Array<{ hashtag: string }>>([]);

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    let result = [];
    this.model.valueChanges.subscribe(({hashtag}) => {
      if (hashtag.length > 0 && hashtag) {
        const options = {
          keys: ['hashtag']
        };
        const fuse = new Fuse(this.hashtags, options);

        result = fuse.search(hashtag).map(({item}) => item.hashtag);
      } else {
        result = this.hashtags.map(value => value.hashtag);
      }
      const uniqueResult = [...new Set(result)];
      this.suggestions$.next(uniqueResult);
    });
  }
}
