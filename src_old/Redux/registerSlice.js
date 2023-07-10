import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk("users/register", async (user) => {
  const response = await axios.post(
    "https://ttool-test.onrender.com/api/auth/register",
    user
  );
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.pending = false;
    },
    [registerUser.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { updateStart, updateSuccess, updateFailure } = userSlice.actions;

export default userSlice.reducer;