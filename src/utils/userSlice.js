import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    isAuthChecked: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.data = action.payload;
      state.isAuthChecked = true;
    },

    removeUser: (state) => {
      state.data = null;
      state.isAuthChecked = true;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
