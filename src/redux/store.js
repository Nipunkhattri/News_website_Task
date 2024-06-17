import { configureStore } from "@reduxjs/toolkit";
import newsReducer  from "./features/NewsSlice";

export default configureStore({
    reducer: {
      news:newsReducer
    },
});