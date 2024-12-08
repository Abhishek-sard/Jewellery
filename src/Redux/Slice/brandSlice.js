import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios";
const initialState = {
  brands: [],
  isLoading: false,
  brands:null,
  error: null,
};

export const getAllBrands = createAsyncThunk(
  "category/allMastercategory",
  async () => {
    const res = await api.get("/api/inventory/getallbrand");
    return res.data;
  }
);
export const getOneBrand = createAsyncThunk(
  "category/allMastercategory",
  async (id) => {
    const res = await api.get(`/api/inventory/getidbybrand/${id}`);
    return res.data;
  }
)
export const createBrand = createAsyncThunk(
  "category/createcategory",
  async (formData) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await api.post("/api/inventory/postbrand", formData, config);
    return res.data;
  }
)
export const brandsDropdown = createAsyncThunk(
  "category/categorydropdown",
  async () => {
    const res = await api.get("api/inventory/dropdownband");
    return res.data;
  }
)

const BrandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
  builder.addCase(getAllBrands.pending, (state) => {
    state.isLoading = true;
    state.error = null;
  }).addCase(getAllBrands.fulfilled, (state, action) => {
    state.isLoading = false;
    state.brands = action.payload.success ? action.payload.data : [];
  }).addCase(getAllBrands.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
  }).addCase(createBrand.pending, (state) => {
    state.isLoading = true;
  }).addCase(createBrand.fulfilled, (state, action) => {
    state.isLoading = false;
  }).addCase(createBrand.rejected, (state, action) => {
    state.isLoading = false;
  })
  },
});

export default BrandSlice.reducer;
