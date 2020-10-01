import { moduleMetadata, storiesOf } from '@storybook/angular';
import { object, text, withKnobs } from '@storybook/addon-knobs';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ShoppingCartComponent } from './shopping-cart.component';
import { select, Store, StoreModule } from '@ngrx/store';
import {
  Product,
  SelectedProduct,
  shoppingCartReducer,
  ShoppingCartState,
  Vouchers,
} from './NgRx/reducers';
import { RouterModule } from '@angular/router';
import { ProductPipe } from './product.pipe';
import { ChangeNumberComponent } from '../changeNumber/change-number/change-number.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Component, Input, OnInit } from '@angular/core';
import { loadAction, setIdAction } from './NgRx/actions';
import { selectProducts } from './NgRx/selector';
import { Observable } from 'rxjs';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-loading-information',
  template: '',
})
export class LoadingInformationComponent implements OnInit {
  set selected(value: Observable<Array<SelectedProduct>>) {
    this._selected = value;
  }

  @Input() set shoppingCartId(value: string) {
    this._shoppingCartId = value;
    this.setId(this._shoppingCartId);
  }

  @Input() set vouchers(value: Array<Vouchers>) {
    this._vouchers = value;
    this.load(this._vouchers, this._products);
  }

  @Input() set products(value: Array<Product>) {
    this._products = value;
    this.load(this._vouchers, this._products);
  }

  _shoppingCartId = '1234';
  _vouchers: Array<Vouchers> = [];
  _products: Array<Product> = [];
  _selected: Observable<Array<SelectedProduct>> = this.store.pipe(
    select(selectProducts)
  );

  constructor(
    private store: Store<{ shoppingCart: ShoppingCartState }>,
    ShoppingCart: ShoppingCartService
  ) {}

  ngOnInit() {
    this.setId(this._shoppingCartId);
    this.load(this._vouchers, this._products);
  }

  load(vouchers, products) {
    this.store.dispatch(loadAction({ vouchers, products }));
  }

  setId(shoppingCartId) {
    this.store.dispatch(setIdAction({ shoppingCartId }));
  }
}

const decoration = {
  declarations: [
    ShoppingCartComponent,
    LoadingInformationComponent,
    ProductPipe,
    ChangeNumberComponent,
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forRoot({
      shoppingCart: shoppingCartReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  constructor() {},
};
storiesOf('Redux', module)
  .addDecorator(moduleMetadata(decoration))
  .addDecorator(withKnobs)
  .add('shopping cart', () => ({
    props: {
      shoppingCartId: text('Cart Id:', 'text'),
      vouchers: object('Vouchers:', [
        {
          type: 'A',
          price: 1000,
          percentDiscount: 10,
        },
        {
          type: 'A',
          price: 2000,
          percentDiscount: 20,
        },
        {
          type: 'B',
          price: 3000,
          percentDiscount: 30,
        },
      ]),
      products: object('Produkt:', [
        {
          name: 'Produkt A',
          id: '1',
          quantity: 1,
          price: 100,
          free: 5,
          type: 'A',
        },
        {
          name: 'Produkt B',
          id: '2',
          quantity: 1,
          price: 200,
          free: 10,
          type: 'A',
        },
        {
          name: 'Produkt C',
          id: '3',
          quantity: 1,
          price: 300,
          free: 15,
          type: 'B',
        },
        {
          name: 'Produkt D',
          id: '4',
          quantity: 1,
          price: 400,
          free: 20,
          type: 'B',
        },
      ]),
    } as Partial<LoadingInformationComponent>,
    template: `<app-loading-information [shoppingCartId]="shoppingCartId" [products]="products" [vouchers]="vouchers">
    </app-loading-information><app-shopping-cart></app-shopping-cart>`,
    component: ShoppingCartComponent,
  }))
  .add('change number', () => ({
    component: ChangeNumberComponent,
    styles: [
      `
    host: {
    wight: 170px;
    height: 50px;
    }`,
    ],
    template: `<app-change-number [number]="30" [maxNumber]="1000" [minNumber]="2"></app-change-number>`,
  }));
