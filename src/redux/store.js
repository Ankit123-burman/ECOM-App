import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from './slices/productSlice'
import cartReducer from "./slices/cartSlice"
import checkOut from "./slices/checkOut"
import orderReducer from './slices/orderSlice'
import  adminUser  from "./slices/adminSlice";
import adminProductSlice from "./slices/adminProducts";
const store = configureStore({
  reducer: {
    auth: authReducer,
    products:productReducer,
    cart:cartReducer,
    checkOut:checkOut,
    oreders:orderReducer,
    admin: adminUser,
    adminProduct: adminProductSlice
  },
});

export default store;
