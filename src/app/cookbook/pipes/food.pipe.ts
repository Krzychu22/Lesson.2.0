import { Pipe, PipeTransform } from '@angular/core';
import construct = Reflect.construct;
import {FoodsService} from '../services/foods.service';
import {FoodInterface} from '../type';

@Pipe({
  name: 'food'
})
export class FoodPipe implements PipeTransform {

  constructor(private FoodService: FoodsService){

  }

  transform(value: string, ...args: unknown[]): FoodInterface {

    console.log(value);
    return this.FoodService.getFood(value);
  }

}
