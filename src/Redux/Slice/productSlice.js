import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  pagination: {
    currentPage: 1,
    totalPages: 1,
    perPage: 5,
  },
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (params) => {
    try {
      
      const res = await api.get(`/api/inventory/getallproduct`, {
        params, // Automatically append ?product_name=s&page=2&per_page=5
      });
      return res.data;
    } catch (err) {
      throw err.response?.data || "An error occurred";
    }
  }
);

export const postProduct = createAsyncThunk(
  "product/postProduct",
  async ({productData}) => {
    try {
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      const res = await api.post("/api/inventory/postproduct", productData,config );
      return res.data;
    } catch (err) {
      console.log(err)
      throw err.response?.data || "An error occurred";
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
    setPerPage: (state, action) => {
      state.pagination.perPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.success) {
          state.products = action.payload.data;
          state.pagination = {
            currentPage: action.payload.current_page,
            totalPages: action.payload.total_pages,
            perPage: action.payload.page_size,
          };
        } else {
          state.products = [];
          state.error = action.payload.message || "Failed to fetch products.";
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "An error occurred.";
      })
      .addCase(postProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postProduct.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to create product.";
      });
  },
});

export const { setPage, setPerPage } = productSlice.actions;
export default productSlice.reducer;
