import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: '',
    value: [],
}

const URL = "https://fakestoreapi.com/products";

export const fetchProductData = createAsyncThunk('detail/fetchProductDetail', async (id) => {
    const response = await axios.get(`${URL}/${id}`);
    console.log(response.data);
    return response.data;
})

const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchProductData.fulfilled, (state, action) => {
            state.value = action.payload;
        })
    }
})

export default detailSlice.reducer;
