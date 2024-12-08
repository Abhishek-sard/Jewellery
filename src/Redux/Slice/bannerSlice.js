import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios";
const initialState = {
  banners: [],
  secondBanners: [],
  footerBanners: [],
  banner:null,
  secondBanner:null,
  footerBanner:null,
  isLoading: false,
  error: null,
};

export const getAllBanners = createAsyncThunk(
  "banner/getAllBanners",
  async () => {
    const res = await api.get("/api/inventory/getallmainbanner");
    return res.data;
  }
);
export const getAllSecondBanners = createAsyncThunk(
  "banner/getAllSecondBanners",
  async () => {
    const res = await api.get("/api/inventory/getallsecondbanner");
    return res.data;
  }
);
export const getAllFooterBanners = createAsyncThunk(
  "banner/getAllFooterBanners",
  async () => {
    const res = await api.get("/api/inventory/getallfooterbanner");
    return res.data;
  }
);
export const createMainBanner = createAsyncThunk(
  "banner/createMainBanner",
  async (formData) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await api.post("/api/inventory/createmainbanner", formData, config);
    return res.data;
  }
);
export const createSecondBanner = createAsyncThunk(
  "banner/createSecondBanner",
  async (formData) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await api.post("/api/inventory/postsecondbanner", formData, config);
    return res.data;
  }
);
export const createFooterBanner = createAsyncThunk(
  "banner/createFooterBanner",
  async (formData) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await api.post("/api/inventory/postfooterbanner", formData, config);
    return res.data;
  }
);

export const getOneMainBanner = createAsyncThunk(
  "banner/getOneMainBanner",
  async (id) => {
    const res = await api.get(`/api/inventory/getmainbannerbyid/${id}`);
    return res.data;
  }
)
export const getOneSecondBanner = createAsyncThunk(
  "banner/getOneSecondBanner",
  async (id) => {
    const res = await api.get(`/api/inventory/getsecondbannerbyid/${id}`);
    return res.data;
})
export const getOneFooterBanner = createAsyncThunk(
  "banner/getOneFooterBanner",
  async (id) => {
    const res = await api.get(`/api/inventory/getfooterbannerbyid/${id}`);
    return res.data;
})
export const updateMainBanner = createAsyncThunk(
  "banner/updateMainBanner",
  async ({  formData,id }) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await api.put("/api/inventory/updatemainbanner/"+id, formData, config);
    return res.data;
  }
)
export const updateSecondBanner = createAsyncThunk(
  "banner/updateSecondBanner",
  async ({formData,id}) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await api.put("/api/inventory/updatesecondbanner/"+id, formData, config);
    return res.data;
  }
)
export const updateFooterBanner = createAsyncThunk(
  "banner/updateFooterBanner",
  async ({formData,id}) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await api.put("/api/inventory/updatefooterbanner/"+id, formData, config);
    return res.data;
  }
)

export const getSecondBannerDropDown = createAsyncThunk(
  "banner/getSecondBannerDropDown",
  async () => {
    const res = await api.get("/api/inventory/dropdownsecoundbanner");
    return res.data;
  }
);
export const getFooterBannerDropDown = createAsyncThunk(
  "banner/getFooterBannerDropDown",
  async () => {
    const res = await api.get("/api/inventory/dropdownfooterbanner");
    return res.data;
  }

)


const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBanners.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllBanners.fulfilled, (state, action) => {
        state.isLoading = false;
        state.banners = action.payload.success ? action.payload.data : [];
      })
      .addCase(getAllBanners.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }).addCase(createMainBanner.pending, (state) => {
        state.isLoading = true;
      }).addCase(createMainBanner.fulfilled, (state, action) => {
        state.isLoading = false;
      }).addCase(createMainBanner.rejected, (state, action) => {
        state.isLoading = false;
      }).addCase(createSecondBanner.pending, (state) => {
        state.isLoading = true;
      }).addCase(createSecondBanner.fulfilled, (state, action) => {
        state.isLoading = false;
      }).addCase(createSecondBanner.rejected, (state, action) => {
        state.isLoading = false;
      }).addCase(createFooterBanner.pending, (state) => {
        state.isLoading = true;
      }).addCase(createFooterBanner.fulfilled, (state, action) => {
        state.isLoading = false;
      }).addCase(createFooterBanner.rejected, (state, action) => {
        state.isLoading = false;
      }).addCase(getAllSecondBanners.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllSecondBanners.fulfilled, (state, action) => {
        state.isLoading = false;
        state.secondBanners = action.payload.success ? action.payload.data : [];
      })
      .addCase(getAllSecondBanners.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }).addCase(getAllFooterBanners.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllFooterBanners.fulfilled, (state, action) => {
        state.isLoading = false;
        state.footerBanners = action.payload.success ? action.payload.data : [];
      })
      .addCase(getAllFooterBanners.rejected, (state, action) => {
        state.isLoading = false;        
        state.error = action?.error?.message || "Something went wrong";
      }).addCase(getOneMainBanner.pending, (state, action) => {
        isLoading: true;
      }).addCase(getOneMainBanner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.mainBanner = action.payload.success ? action.payload.data : null;
      }).addCase(getOneMainBanner.rejected, (state, action) => {
        state.isLoading = false;
      }).addCase(getOneSecondBanner.pending, (state, action) => {
        isLoading: true;
      }).addCase(getOneSecondBanner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.secondBanner = action.payload.success ? action.payload.data : null;
      }).addCase(getOneSecondBanner.rejected, (state, action) => {
        state.isLoading = false;
      }).addCase(getOneFooterBanner.pending, (state, action) => {
        isLoading: true;
      }).addCase(getOneFooterBanner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.footerBanner = action.payload.success ? action.payload.data : null;
      }).addCase(getOneFooterBanner.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
})
// export const { setReduxUserlogout } = userSlice.actions;

export default bannerSlice.reducer;
