import { configureStore } from "@reduxjs/toolkit";
import surveyResult from "./reducers/surveyResult";

export const store = configureStore({
  reducer: {
    surveyResult,
  },
})

