import { createSelector } from '@ngrx/store';
import { ShoppingCartState } from './reducers';

const selectFeature = (state: { shoppingCart: ShoppingCartState }) =>
  state.shoppingCart;

export const selectProducts = createSelector(
  selectFeature,
  (state: ShoppingCartState) => state.selected
);
export const selectProductsList = createSelector(
  selectFeature,
  (state: ShoppingCartState) => state.products
);
export const selectCost = createSelector(
  selectFeature,
  (state: ShoppingCartState) => state.cost
);
export const reducedPrice = createSelector(
  selectFeature,
  (state: ShoppingCartState) => state.reducedPrice
);
export const vouchers = createSelector(
  selectFeature,
  (state: ShoppingCartState) => state.vouchers
);
export const shoppingCartId = createSelector(
  selectFeature,
  (state: ShoppingCartState) => state.shoppingCartId
);
