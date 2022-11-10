import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imageName: "",
  status: "idle",
  error: null,
};

export const orderImageSlice = createSlice({
  name: "orderImage",
  initialState,
  reducers: {
    saveImage: (state, imageName) => {
      state.imageName = imageName.payload;
    },
    getImage: (state) => state.imageName,
  },
});

export const { saveImage, getImage } = orderImageSlice.actions;

export default orderImageSlice.reducer;
