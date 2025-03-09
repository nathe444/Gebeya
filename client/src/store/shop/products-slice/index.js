import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllFilteredProducts = createAsyncThunk(
  "shop/fetchALlFilteredProducts",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/shop/products/get"
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  loading: false,
  productList: [],
  error: null,
};

const ShopProductSlice = createSlice({
  name: "shopProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilteredProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllFilteredProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.productList = action.payload.filteredProducts;
      });
  },
});

export default ShopProductSlice.reducer;
