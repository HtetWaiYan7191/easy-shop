import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading : false,
    favorite : false, 
    cart: false, 
    value: [],
    error : '',
};
const URL = 'https://fakestoreapi.com/products';
export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
    const result = await axios.get(URL);
   console.log(result.data)
   return result.data;
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload;
            state.error = '';
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.value = "";
            state.error = action.error.message;
            console.log(action.error.message)
        })
    }
})
export default productSlice.reducer;