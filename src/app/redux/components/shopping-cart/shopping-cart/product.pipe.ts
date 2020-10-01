import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { Product, ShoppingCartState } from './NgRx/reducers';
import { selectProductsList } from './NgRx/selector';
import { Observable } from 'rxjs';

@Pipe({
  name: 'product',
})
export class ProductPipe implements PipeTransform {
  constructor(private store: Store<{ shoppingCart: ShoppingCartState }>) {}

  transform(id: string): Observable<Product> {
    return this.store
      .pipe(select(selectProductsList))
      .pipe(map((value) => value.find((x) => x.id === id)));
  }
}
