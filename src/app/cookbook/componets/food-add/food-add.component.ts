import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Allergies, FoodInterface} from '../../type';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  @Input() model = this.fb.group({
    name: ['', [Validators.required]],
    unit: ['', [Validators.required]],
    calories: ['', [Validators.required]],
    allergies: ['']
  });

  @Input() foods: Array<FoodInterface>;
  @Input() allergies: Array<Allergies>;
  @Input() isEditFood = false;
  @Output() add = new EventEmitter();
  @Output() change = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }


  ngOnInit(): void {
  }

}
