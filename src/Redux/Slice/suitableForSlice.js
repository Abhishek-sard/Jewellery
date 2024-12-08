import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios";

const initialState = {
  suitableFor: [],
  isLoading: false,
  selectedSuitableFor: null,
//   suitableForDropDown:[],
  error: null,
};

// Create SuitableFor
export const createSuitableFor = createAsyncThunk(
  "suitableFor/createSuitableFor",
  async (formData) => {
    try {
      const res = await api.post("/api/inventory/diseasepost", formData);
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

// Get All SuitableFor
export const getAllSuitableFor = createAsyncThunk(
  "suitableFor/getAllSuitableFor",
  async () => {
    try {
      const res = await api.get("/api/inventory/getdisease");
      return res.data;
    } catch (error) {
        return error.response.data;
    }
  }
);

// Update SuitableFor
export const updateSuitableFor = createAsyncThunk(
  "suitableFor/updateSuitableFor",
  async ({ id, formData }) => {
    try {
      const res = await api.put(`/api/inventory/updatedisease/${id}`, formData);
      return res.data;
    } catch (error) {
        return error.response.data;
    }
  }
);

// Delete SuitableFor
export const deleteSuitableFor = createAsyncThunk(
  "suitableFor/deleteSuitableFor",
  async (id) => {
    try {
      const res = await api.delete(`/api/inventory/deletedisease/${id}`);
      return { id };
    } catch (error) {
        return error.response.data;
    }
  }
);


export const getSuitableForDropDown = createAsyncThunk(
  "suitableFor/getSuitableForDropDown",
  async () => {
    try {
      const res = await api.get("/api/inventory/getdisease");
      return res.data;
    } catch (error) {
        return error.response.data;
    }
  }
)
const suitableForSlice = createSlice({
  name: "suitableFor",
  initialState,
  reducers: {
    // Select SuitableFor for editing
    selectSuitableFor: (state, action) => {
      state.selectedSuitableFor = action.payload;
    },
    // Clear selected SuitableFor
    clearSelectedSuitableFor: (state) => {
      state.selectedSuitableFor = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create SuitableFor
      .addCase(createSuitableFor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSuitableFor.fulfilled, (state, action) => {
        state.isLoading = false;
   
      })
      .addCase(createSuitableFor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Get All SuitableFor
      .addCase(getAllSuitableFor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSuitableFor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.suitableFor = action.payload.data? action.payload.data : [];
      })
      .addCase(getAllSuitableFor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Update SuitableFor
      .addCase(updateSuitableFor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateSuitableFor.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.suitableFor.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.suitableFor[index] = action.payload;
        }
      })
      .addCase(updateSuitableFor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteSuitableFor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSuitableFor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.suitableFor = state.suitableFor.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteSuitableFor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }).addCase(getSuitableForDropDown.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSuitableForDropDown.fulfilled, (state, action) => {
        state.isLoading = false;
        state.suitableFor = action.payload.data? action.payload.data : [];
      })
      .addCase(getSuitableForDropDown.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectSuitableFor, clearSelectedSuitableFor } =
  suitableForSlice.actions;

export default suitableForSlice.reducer;
