import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/ProductsSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
