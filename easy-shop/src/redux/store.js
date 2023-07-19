import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import detailReducer from './detailSlice';

const store = configureStore({
    reducer: {
        products:productReducer,
        detail: detailReducer
    }
})

export default store;