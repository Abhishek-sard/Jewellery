import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios";

export const fetchHomePageMainBanner = createAsyncThunk(
  "homepageMainBanner/fetch",
  async () => {
    const res = await api.get("/api/inventory/homepagemainbanner");
    return res.data.data;
  }
);

export const fetchHomePageSecondBanner = createAsyncThunk(
  "homepageSecondBanner/fetch",
  async () => {
    const res = await api.get("/api/inventory/homepagesecondbanner");
    return res.data.data;
  }
);

export const fetchHomePageFooterBanner = createAsyncThunk(
  "homepageFooterBanner/fetch",
  async () => {
    const res = await api.get("/api/inventory/homepagefooterbanner");
    return res.data.data;
  }
);

const homepageMainBannerSlice = createSlice({
  name: "homepageMainBanner",
  initialState: {
    banners: [],
    secondBanners: [],
    footerBanners: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomePageMainBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomePageMainBanner.fulfilled, (state, action) => {
        state.loading = false;
        state.banners = action.payload;
      })
      .addCase(fetchHomePageMainBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchHomePageSecondBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomePageSecondBanner.fulfilled, (state, action) => {
        state.loading = false;
        state.secondBanners = action.payload;
      })
      .addCase(fetchHomePageSecondBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchHomePageFooterBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomePageFooterBanner.fulfilled, (state, action) => {
        state.loading = false;
        state.footerBanners = action.payload;
      })
      .addCase(fetchHomePageFooterBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default homepageMainBannerSlice.reducer;
