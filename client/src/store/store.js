import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice/index";
import adminProductSlice from "./admin/products-slice/index";
import shopProductsSlice from "./shop/products-slice/index";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductSlice,
    shopProducts: shopProductsSlice,
  },
});

export default store;
