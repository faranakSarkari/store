import { configureStore } from "@reduxjs/toolkit";
import ShopSliceReducer from "./slices/ShopSlice";

const store=configureStore({
    reducer:{
        shop:ShopSliceReducer
    }
})
export default store
