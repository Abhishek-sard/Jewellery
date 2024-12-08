import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: "test Redux",
  },
  reducers: {
    setReduxUser: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setReduxUser, logout } = userSlice.actions;

export default userSlice.reducer;
