import { createSlice } from "@reduxjs/toolkit";

const surveyResult = createSlice({
  name: "surveyResult",
  initialState: {
    data: [],
  },
  reducers: {
    addData: (state, action) => {
      const id = state.data.length + 1;
      state.data.push({ id, ...action.payload });
    },
    removeData: (state, action) => {
      state.data = state.data.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addData, removeData } = surveyResult.actions;
export default surveyResult.reducer;