import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {RecipeStep} from '../../type';
import Fuse from 'fuse.js';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-realization-add',
  templateUrl: './realization-add.component.html',
  styleUrls: ['./realization-add.component.scss']
})
export class RealizationAddComponent implements OnInit {

  @Input() model = this.fb.group({
    content: ['', [Validators.required]],
  });
  @Input() realizations: Array<RecipeStep> = [];
  @Input() isEditRealization = false;
  @Output() add = new EventEmitter();
  @Output() change = new EventEmitter();
  @Input() allowEdit = false;

  suggestions$ = new BehaviorSubject<Array<{ realization: string }>>([]);

  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    let result = [];
    this.model.valueChanges.subscribe(({content}) => {
      if (content.length > 0 && content) {
        const options = {
          keys: ['content']
        };
        const fuse = new Fuse(this.realizations, options);

        result = fuse.search(content).map(({item}) => item.content);
      } else {
        result = this.realizations.map(value => value.content);
      }
      const uniqueResult = [...new Set(result)];
      this.suggestions$.next(uniqueResult);
    });
  }

}
