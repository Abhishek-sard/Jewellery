import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios";
const initialState = {
  categories: [],
  masterCategories: [],
  subCategories: [],
  category: null,
  subcategory: null,
  mastercategory: null,
  isLoading: false,
  error: null,
};

export const getAllMasterCategory = createAsyncThunk(
  "category/allMastercategory",
  async () => {
    const res = await api.get("/api/inventory/getallmastercategory");
    return res.data;
  }
);
export const getOneMasterCategory = createAsyncThunk(
  "category/oneMastercategory",
  async (id) => {
    const res = await api.get(`/api/inventory/getidbymastercat/${id}`);
    return res.data;
  }
)
export const getOneCategory = createAsyncThunk(
  "category/onecategory",
  async (id) => {
    const res = await api.get(`/api/inventory/getidbycategory/${id}`);
    return res.data;
  }
)
export const getOneSubCategory = createAsyncThunk(
  "category/onesubcategory",
  async (id) => {
    const res = await api.get(`/api/inventory/getidbysubcategory/${id}`);
    return res.data;
  }
)


export const updateMasterCategory = createAsyncThunk(
  "category/updateMasterCategory",
  async ({ formData, id }) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await api.post(`/api/inventory/updatemastercategory/${id}`, formData, config);
    return res.data;
  }
);
export const updateCategory = createAsyncThunk(
  "category/updatecategory",
  async ({submissionData,id}) => { 
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await api.post("/api/inventory/updatecategory/"+id, submissionData, config);
    return res.data;
  }
)
export const updateSubCategory = createAsyncThunk(
  "category/updatesubcategory",
  async ({submissionData,id}) => {
  
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await api.post("/api/inventory/updatesubcategory/"+id, submissionData, config);
  
    return res.data;
  }
)

export const getAllCategory = createAsyncThunk(
  "category/allcategory",
  async () => {
    const res = await api.get("/api/inventory/getallcategory");
    return res.data;
  }
);

export const getAllSubCategory = createAsyncThunk(
  "category/allsubcategory",
  async () => {
    const res = await api.get("/api/inventory/getallsubcategory");
    return res.data;
  }
);
export const createMasterCategory = createAsyncThunk(
  "category/createmastercategory",
  async (formData) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await api.post("/api/inventory/addmastercategory", formData, config);

    return res.data;
  }
);
export const createCategory = createAsyncThunk(
  "category/createcategory",
  async (formData) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await api.post("/api/inventory/postcategory", formData, config);
  
    return res.data;
  }
)
export const createSubCategory = createAsyncThunk(
  "category/createsubcategory",
  async (formData) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await api.post("/api/inventory/postsubcategory", formData, config);

    return res.data;
  }
)
export const masterCategoryDropDown = createAsyncThunk(
  "category/mastercategorydropdown",
  async () => {
    const res = await api.get("/api/inventory/dropdownmastercat");
    return res.data;
  }
)
export const categoryDropDown = createAsyncThunk(
  "category/categorydropdown",
  async () => {
    const res = await api.get("/api/inventory/dropdowncategory");
    return res.data;
  }
)
export const subCategoryDropDown = createAsyncThunk(
  "category/subcategorydropdown",
  async () => {
    const res = await api.get("/api/inventory/dropdownsubcat");
    return res.data;
  }
)

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMasterCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllMasterCategory.fulfilled, (state, action) => {
   
        state.isLoading = false;
        state.masterCategories = action.payload.success
          ? action.payload.data
          : [];
      })
      .addCase(getAllMasterCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getAllCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
       
        state.isLoading = false;
        state.categories = action.payload.success ? action.payload.data : [];
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getAllSubCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllSubCategory.fulfilled, (state, action) => {
        
        state.isLoading = false;
        state.subCategories = action.payload.success ? action.payload.data : [];
      })
      .addCase(getAllSubCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }).addCase(createMasterCategory.pending, (state) => {
        state.isLoading = true;
      }).addCase(createMasterCategory.fulfilled, (state, action) => {
        state.isLoading = false;
      }).addCase(createMasterCategory.rejected, (state, action) => {
        state.isLoading = false;
      }).addCase(createCategory.pending, (state) => {
        state.isLoading = true;
      }).addCase(createCategory.fulfilled, (state, action) => {
        state.isLoading = false;
      }).addCase(createCategory.rejected, (state, action) => {
        state.isLoading = false;
      }).addCase(getOneMasterCategory.pending, (state) => {
        state.isLoading = true;
      }).addCase(getOneMasterCategory.fulfilled, (state, action) => {
        
        state.isLoading = false;
        state.mastercategory = action.payload.success
          ? action.payload.data
          : null;
      }).addCase(getOneMasterCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }).addCase(updateMasterCategory.pending, (state) => {
        state.isLoading = true;
      }).addCase(updateMasterCategory.fulfilled, (state, action) => {
        state.isLoading = false;
      }).addCase(updateMasterCategory.rejected, (state, action) => {
        state.isLoading = false;
      }).addCase(getOneCategory.pending, (state) => {
        state.isLoading = true;
      }).addCase(getOneCategory.fulfilled, (state, action) => {
   
        state.isLoading = false;
        state.category = action.payload.success ? action.payload.data : null;
      }).addCase(getOneCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }).addCase(updateCategory.pending, (state) => {
        state.isLoading = true;
      }).addCase(updateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
      }).addCase(updateCategory.rejected, (state, action) => {
        state.isLoading = false;
      }).addCase(getOneSubCategory.pending, (state) => {
        state.isLoading = true;
      }).addCase(getOneSubCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subcategory = action.payload.success
          ? action.payload.data
          : null;
      }).addCase(getOneSubCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }).addCase(updateSubCategory.pending, (state) => {
        state.isLoading = true;
      }).addCase(updateSubCategory.fulfilled, (state, action) => {
       
        state.isLoading = false;
      }).addCase(updateSubCategory.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default categorySlice.reducer;
