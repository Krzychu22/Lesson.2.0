import { Injectable } from '@angular/core';
import { SelectedProduct, ShoppingCartState } from './NgRx/reducers';
import { select, Store } from '@ngrx/store';
import { selectProducts, shoppingCartId } from './NgRx/selector';
import { newCostAction } from './NgRx/actions';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  id = '';

  constructor(private store: Store<{ shoppingCart: ShoppingCartState }>) {
    this.store
      .pipe(
        select(shoppingCartId),
        filter((v) => !!v)
      )
      .subscribe((id) => {
        this.id = id;
        if (JSON.parse(localStorage.getItem('products.' + this.id))) {
          this.loadProduct();
        }
      });
    this.store
      .pipe(
        select(selectProducts),
        filter((v) => !!v.length)
      )
      .subscribe((products) => this.save(products));
  }

  save(products: Array<SelectedProduct>) {
    localStorage.setItem('products.' + this.id, JSON.stringify(products));
    // console.log('products', JSON.parse(localStorage.getItem('products')));
  }

  loadProduct() {
    this.store.dispatch(
      newCostAction({
        selected: JSON.parse(localStorage.getItem('products.' + this.id)),
      })
    );
  }
}
