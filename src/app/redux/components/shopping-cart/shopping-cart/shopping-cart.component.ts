import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ShoppingCartState } from './NgRx/reducers';
import {
  reducedPrice,
  selectCost,
  selectProducts,
  selectProductsList,
  vouchers,
} from './NgRx/selector';
import { addAction, changeAction, deleteAction } from './NgRx/actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  selected$ = this.store.pipe(select(selectProducts));
  products$ = this.store.pipe(select(selectProductsList));
  cost$ = this.store.pipe(select(selectCost));
  reducedPrice$ = this.store.pipe(select(reducedPrice));
  vouchers$ = this.store.pipe(select(vouchers));

  constructor(private store: Store<{ shoppingCart: ShoppingCartState }>) {}

  ngOnInit(): void {}

  add(id: string, quantity: string) {
    if (Number(quantity) > 0) {
      this.store.dispatch(
        addAction({ product: { id, quantity: Number(quantity) } })
      );
    }
  }

  delete(id: string) {
    this.store.dispatch(deleteAction({ id }));
  }

  change(id: string, quantity: number) {
    this.store.dispatch(changeAction({ id, quantity }));
  }

  trackByFn(item) {
    return item;
  }

  filter(e: KeyboardEvent) {
    if (
      /^\d+$/.test(e.key) === false &&
      ['Backspace', 'Delete'].indexOf(e.key) === -1
    ) {
      e.preventDefault();
    }
  }
}
