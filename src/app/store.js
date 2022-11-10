import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/ProductsSlice";
import orderImageReducer from "../features/orderImage/orderImageSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    orderImage: orderImageReducer,
  },
});
