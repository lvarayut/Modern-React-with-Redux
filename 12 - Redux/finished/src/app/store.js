import { configureStore } from '@reduxjs/toolkit';
import productReducers from '../features/Product/reducers';

export default configureStore({
  reducer: {
    products: productReducers
  }
});
