import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./RestrauntsSlice";

const Store = configureStore({
    reducer:{
        ResData:restaurantReducer
    }
});

export default Store;