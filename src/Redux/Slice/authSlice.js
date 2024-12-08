import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  user: {
    name: "",
    username: "",
    role_id: 0,
    role_name: "",
  },
  isLoading: false,
  error: null,
  token: null,
  refresh: false,
};

export const login = createAsyncThunk("auth/login", async (formData) => {
  const res = await api.post(`/api/user/login`, formData, {
    withCredentials: true,
  });
console.log({res})
  if (res.data.success) {
    localStorage.setItem("auth_token", res.data.token);
    return {
      token: res.data.token,
      user: res.data.user_data,
    };
  }
  throw new Error("Login failed");
});

export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  const token = localStorage.getItem("auth_token");

  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/user/checktoken`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
});

// Slice definition
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("auth_token");
      state.isAuthenticated = false;
      state.user = {
        name: "",
        username: "",
        role_id: 0,
        role_name: "",
      };
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        
        state.isLoading = false;
        state.isAuthenticated =action.payload.token?  true:false;
        state.token =action.payload.token? action.payload.token:null;
        state.user = action.payload.user? action.payload.user:null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.error.message;
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
       
        state.isLoading = false;
        if (action.payload.expired) {
          state.isAuthenticated = false;
          state.user = null;
          state.token = null;
        }
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
