import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllFilteredProducts = createAsyncThunk(
  "shop/fetchALlFilteredProducts",
  async ({filters , sort}) => {
    try {
      const query = new URLSearchParams({
        ...filters ,
        sortBy : sort
    })
      const response = await axios.get(
        `http://localhost:5000/api/shop/products/get?${query}`
      );
      return response.data;
    } catch (err) { 
      console.log(err);
    }
  }
);

export const getProductDetails = createAsyncThunk(
  "shop/getProductDetails",
  async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/shop/products/get/${id}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
)

const initialState = {
  loading: false,
  productList: [],
  productDetails: null,
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
      })
      .addCase(getProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action.payload.product;
      });
  },
});

export default ShopProductSlice.reducer;
