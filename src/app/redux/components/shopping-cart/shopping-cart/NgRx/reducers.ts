import { Action, createReducer, on } from '@ngrx/store';
import {
  addAction,
  changeAction,
  deleteAction,
  loadAction,
  newCostAction,
  setIdAction,
} from './actions';
import { cloneDeep } from 'lodash';

export interface SelectedProduct {
  id: string;
  quantity: number;
  price: number;
}

export interface Product {
  name: string;
  id: string;
  quantity: number;
  price: number;
  free: number;
  type: string;
}

export interface Vouchers {
  price: number;
  percentDiscount: number;
  type: string;
}

interface Cost {
  beforeDiscount: number;
  afterDiscount: number;
}

export interface ShoppingCartState {
  shoppingCartId: string;
  products: Array<Product>;
  selected: Array<SelectedProduct>;
  cost: Array<Cost>;
  vouchers: Array<Vouchers>;
  reducedPrice: Array<number>;
}

export const initialState: ShoppingCartState = {
  shoppingCartId: '',
  products: [],
  selected: [],
  cost: [{ beforeDiscount: 0, afterDiscount: 0 }],
  vouchers: [],
  reducedPrice: [],
};

function calcBeforeCost(cost: Array<SelectedProduct>) {
  return cost.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );
}

function calcAfterCost(
  cost: Array<Cost>,
  selected: Array<SelectedProduct>,
  products: Array<Product>,
  vouchers: Array<Vouchers>
) {
  vouchers.sort(sort);
  let discount = 0;
  let afterDiscount = 0;
  let totalCost = 0;
  const board = [];
  // console.log('posegregowane rosnąco:', vouchers);
  for (let i = 0; i < selected.length; i++) {
    const product = products.find((x) => x.id === selected[i].id);
    if (product) {
      // console.log('Produkt:', product);
      for (let j = 0; j < vouchers.length; j++) {
        if (vouchers[j].type === product.type) {
          if (
            vouchers[j].price <=
            selected[i].quantity * product.price - product.free * product.price
          ) {
            // console.log(
            //   'typ:',
            //   vouchers[j].type,
            //   'pułap od którego się zaczyna zniżka:',
            //   vouchers[j].price,
            //   'cena produktu:',
            //   selected[i].price
            // );
            discount =
              ((selected[i].quantity * product.price -
                product.free * product.price) /
                100) *
              vouchers[j].percentDiscount;
            // console.log('taniej o:', discount);
          }
        } else {
          cost[0].afterDiscount =
            selected[i].quantity * product.price - product.free * product.price;
          // console.log('zwykły koszt:', cost[0].afterDiscount);
        }
        afterDiscount = cost[0].afterDiscount - discount;
        // console.log('koszt po zniżce:', afterDiscount);
      }
      board.push(afterDiscount, cost[0].afterDiscount);
      discount = 0;
      // console.log('suma obniżonego kosztu:', totalCost);
    }
  }
  for (let i = 0; i <= board.length - 1; i++) {
    if (board[i] < 0) {
      board[i] = 0;
    }
    if (!(i % 2)) {
      totalCost += board[i];
    }
  }
  board.push(totalCost);
  // console.log(board); nbm
  return board;
}

function sort(a, b) {
  return a.price - b.price;
}

const textReducer = createReducer(
  initialState,
  on(setIdAction, (state, args) => {
    const res = cloneDeep(state);
    res.shoppingCartId = args.shoppingCartId;
    return res;
  }),
  on(loadAction, (state, args) => {
    const res = cloneDeep(state);
    args = cloneDeep(args);
    res.products = args.products;
    if (res.products.length > 0) {
      for (let i = 0; i <= res.selected.length - 1; i++) {
        if (!res.products.find((x) => x.id === res.selected[i].id)) {
          const index = res.selected.findIndex(
            (x) => x.id === res.selected[i].id
          );
          res.selected.splice(index, 1);
          console.log(!res.products.find((x) => x.id === res.selected[i].id));
        }
      }
    }
    res.vouchers = args.vouchers;
    res.reducedPrice = calcAfterCost(
      res.cost,
      res.selected,
      res.products,
      res.vouchers
    );
    res.cost.find((x) => x).afterDiscount =
      res.reducedPrice[res.reducedPrice.length - 1];
    if (!(res.reducedPrice[0] === 0)) {
      for (let i = 0; i <= res.selected.length - 1; i++) {
        res.selected[i].price = res.reducedPrice[2 * i + 1];
      }
    }
    res.cost.find((x) => x).beforeDiscount = calcBeforeCost(res.selected);
    return res;
  }),
  on(newCostAction, (state, args) => {
    const res = cloneDeep(state);
    res.selected = args.selected;
    return res;
  }),
  on(addAction, (state, args) => {
    const res = cloneDeep(state);
    const current = res.selected.find((x) => x.id === args.product.id);
    if (current) {
      current.quantity = current.quantity + args.product.quantity;
      const price =
        res.products.find((x) => x.id === args.product.id).price *
        (current.quantity -
          res.products.find((x) => x.id === args.product.id).free);
      current.price = Math.max(0, price);
    } else {
      const price =
        res.products.find((x) => x.id === args.product.id).price *
        (args.product.quantity -
          res.products.find((x) => x.id === args.product.id).free);
      res.selected.push({
        ...args.product,
        price: Math.max(0, price),
      });
    }
    res.cost.find((x) => x).beforeDiscount = calcBeforeCost(res.selected);
    res.reducedPrice = calcAfterCost(
      res.cost,
      res.selected,
      res.products,
      res.vouchers
    );
    res.cost.find((x) => x).afterDiscount =
      res.reducedPrice[res.reducedPrice.length - 1];
    if (!(res.reducedPrice[0] === 0)) {
      for (let i = 0; i <= res.selected.length - 1; i++) {
        res.selected[i].price = res.reducedPrice[2 * i + 1];
      }
    }
    res.cost.find((x) => x).beforeDiscount = calcBeforeCost(res.selected);
    return res;
  }),
  on(deleteAction, (state, args) => {
    const res = cloneDeep(state);
    const index = res.selected.findIndex((x) => x.id === args.id);
    res.selected.splice(index, 1);
    res.cost.find((x) => x).beforeDiscount = calcBeforeCost(res.selected);
    res.reducedPrice = calcAfterCost(
      res.cost,
      res.selected,
      res.products,
      res.vouchers
    );
    res.cost.find((x) => x).afterDiscount =
      res.reducedPrice[res.reducedPrice.length - 1];
    if (!(res.reducedPrice[0] === 0)) {
      for (let i = 0; i <= res.selected.length - 1; i++) {
        res.selected[i].price = res.reducedPrice[2 * i + 1];
      }
    }
    res.cost.find((x) => x).beforeDiscount = calcBeforeCost(res.selected);
    return res;
  }),
  on(changeAction, (state, args) => {
    const res = cloneDeep(state);
    const currentS = res.selected.find((x) => x.id === args.id);
    const currentP = res.products.find((x) => x.id === args.id);
    currentS.quantity = args.quantity;
    const price = currentP.price * (currentS.quantity - currentP.free);
    currentS.price = Math.max(0, price);
    res.cost.find((x) => x).beforeDiscount = calcBeforeCost(res.selected);
    res.reducedPrice = calcAfterCost(
      res.cost,
      res.selected,
      res.products,
      res.vouchers
    );
    res.cost.find((x) => x).afterDiscount =
      res.reducedPrice[res.reducedPrice.length - 1];
    if (!(res.reducedPrice[0] === 0)) {
      for (let i = 0; i <= res.selected.length - 1; i++) {
        res.selected[i].price = res.reducedPrice[2 * i + 1];
      }
    }
    res.cost.find((x) => x).beforeDiscount = calcBeforeCost(res.selected);
    return res;
  })
);

export function shoppingCartReducer(
  state: ShoppingCartState | undefined,
  action: Action
) {
  return textReducer(state, action);
}
