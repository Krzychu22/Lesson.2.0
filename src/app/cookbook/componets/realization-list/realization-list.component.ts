import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeStep} from '../../type';


@Component({
  selector: 'app-realization-list',
  templateUrl: './realization-list.component.html',
  styleUrls: ['./realization-list.component.scss']
})
export class RealizationListComponent implements OnInit {

  @Input() realizations: Array<RecipeStep>;
  @Input() allowEdit = false;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() drop = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
