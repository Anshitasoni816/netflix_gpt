import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import moviesReducer from "../utils/movieSlice";
import configReducer from "../utils/configSlice"
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    config : configReducer,
  },
});

export default appStore;
