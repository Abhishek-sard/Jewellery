import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios";
const initialState = {
  units: [],
  isLoading: false,
  selectedUnit: null,
  error: null,
};
export const createUnit = createAsyncThunk(
  "category/createcategory",
  async (formData) => {
    try {
      const res = await api.post("/api/inventory/postunit", formData);

      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const getAllUnits = createAsyncThunk(
  "category/allMastercategory",
  async () => {
    const res = await api.get("/api/inventory/getunit");
    return res.data;
  }
);
// Update Unit
export const updateUnit = createAsyncThunk(
  "unit/updateUnit",
  async ({ id, formData }) => {
    try {
      const res = await api.put(`/api/inventory/updateunit/${id}`, formData);
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }
);
export const getUnitsDropDown = createAsyncThunk(
  "unit/getUnitsDropDown",
  async () => {
    try {
      const res = await api.get("/api/inventory/getunit");
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const unitSlice = createSlice({
  name: "unit",
  initialState,
  reducers: {
    // Select Unit for Editing
    selectUnit: (state, action) => {
      state.selectedUnit = action.payload;
    },
    clearSelectedUnit: (state) => {
      state.selectedUnit = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUnit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUnit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.units.push(action.payload);
      })
      .addCase(createUnit.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getAllUnits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUnits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.units = action.payload.data ?action.payload.data : [];
      })
      .addCase(getAllUnits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateUnit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUnit.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.units.findIndex(
          (unit) => unit.id === action.payload.id
        );
        if (index !== -1) {
          state.units[index] = action.payload;
        }
      })
      .addCase(updateUnit.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }).addCase(getUnitsDropDown.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUnitsDropDown.fulfilled, (state, action) => {
        state.isLoading = false;
        state.units = action.payload.data ?action.payload.data : [];

      })
      .addCase(getUnitsDropDown.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectUnit, clearSelectedUnit } = unitSlice.actions;
export default unitSlice.reducer;
