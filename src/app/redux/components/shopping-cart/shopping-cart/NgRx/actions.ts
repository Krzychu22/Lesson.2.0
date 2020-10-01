import { createAction, props } from '@ngrx/store';

export const addAction = createAction(
  '[Shopping cart] Add product',
  props<{ product: { id: string; quantity: number } }>()
);

export const deleteAction = createAction(
  '[Shopping cart] Delete product',
  props<{ id: string }>()
);
export const changeAction = createAction(
  '[Shopping cart] Change product',
  props<{ id: string; quantity: number }>()
);
export const loadAction = createAction(
  '[Shopping cart] Load product and vouchers',
  props<{
    vouchers: Array<{
      price: number;
      percentDiscount: number;
      type: string;
    }>;
    products: Array<{
      name: string;
      id: string;
      quantity: number;
      price: number;
      free: number;
      type: string;
    }>;
  }>()
);
export const newCostAction = createAction(
  '[Shopping cart] Updating prices of selected products',
  props<{
    selected: Array<{
      id: string;
      quantity: number;
      price: number;
    }>;
  }>()
);
export const setIdAction = createAction(
  '[Shopping cart] set Id',
  props<{
    shoppingCartId: string;
  }>()
);
