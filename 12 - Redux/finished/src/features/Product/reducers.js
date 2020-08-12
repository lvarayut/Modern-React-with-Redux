import { createReducer } from '@reduxjs/toolkit';
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct
} from './actions';

let currentProductId = 9;

export default createReducer([], {
  [fetchProducts]: (state, action) => {
    return action.payload;
  },
  [addProduct]: (state, action) => {
    state.push({ id: ++currentProductId, ...action.payload });
  },
  [updateProduct]: (state, action) => {
    const productIndex = state.findIndex(
      (product) => product.id === action.payload.id
    );
    state[productIndex] = action.payload;
  },
  [deleteProduct]: (state, action) => {
    const productIndex = state.findIndex(
      (product) => product.id === action.payload.id
    );
    state.splice(productIndex, 1);
  }
});
