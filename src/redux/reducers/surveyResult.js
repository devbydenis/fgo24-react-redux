import { createSlice } from "@reduxjs/toolkit";

const surveyResult = createSlice({
  name: "surveyResult",
  initialState: {
    surveyResult: [],
  },
  reducers: {
    addData: (state, action) => {
      const id = state.surveyResult.length + 1;
      state.surveyResult.push({ id, ...action.payload });
    },
    removeData: (state, action) => {
      state.surveyResult = state.surveyResult.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addData, removeData } = surveyResult.actions;
export default surveyResult.reducer;