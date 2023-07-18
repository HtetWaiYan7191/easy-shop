import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading : false,
    value: [],
    error : '',
};
const URL = 'https://fakestoreapi.com/products';
export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
    const result = await axios.get(URL);
    const products = result.data.map((product) => ({
        id: product.id,
        title: product.title,
        category: product.category,
        description: product.description,
        image: product.image,
        price: product.price,
        favorite: false,
        cart: false,
    }));
   return products;
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        addFavoriteList: (state,action) => {
            const newState = state.value.map((product) => {
                if(product.id !== action.payload) return product;
                return ({...product, favorite:true})
            });
            state.value = newState;
        },
        removeFavoriteList: (state, action) => {
            const newState = state.value.map((product) => {
                if(product.id !== action.payload) return product;
                return ({...product, favorite: false})
            });
            state.value = newState;
        }
    },
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
export const {addFavoriteList, removeFavoriteList} = productSlice.actions;