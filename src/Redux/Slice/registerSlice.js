import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios";

const initialState = {
  isLoading: false,
  otpSent: false,
  error: null,
  mobile_number: "",
};

// Signup action
export const signup = createAsyncThunk(
  "/customer/signup",
  async (formData, { dispatch }) => {
    dispatch(setMobileNumber(formData.mobile_number));
    const res = await api.post("/api/customer/registercustomer", formData);
    console.log({ res });
    return res.data;
  }
);

export const verifyOtp = createAsyncThunk(
  "/customer/verifyotp",
  async (formData, { getState }) => {
    const { register } = getState();
    console.log(formData.otp);

    const otpAsString = formData.otp.toString();
    const otp = parseInt(otpAsString.split("").join(""), 10);

    const newFormData = {
      mobile_number: register.mobile_number,
      otp,
    };

    //   console.log({newFormData});
    try {
      
      const res = await api.post("/api/customer/otpverify", newFormData);
  
      return res.data;
    } catch (error) {

      return error.response.data;
    }
  }
);

// Slice definition
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setMobileNumber(state, action) {
      state.mobile_number = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.otpSent = action.payload.success ? true : false;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.otpSent = action.payload.success ? false : true;
        state.mobile_number = action.payload.success?"":state.mobile_number;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Export the reducer and actions
export const { setMobileNumber } = registerSlice.actions;
export default registerSlice.reducer;
