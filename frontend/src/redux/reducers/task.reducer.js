import { createSlice } from "@reduxjs/toolkit";
import columns from "../../initialColums.json";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    columns,
  },
  reducers: {
    dataStart: (state, action) => ({
      ...state,
      status: "loading",
      requestType: action.payload.requestType,
    }),
    dataSuccess: (state, action) => ({
      ...state,
      status: "success",
      error: null,
      ...action.payload,
    }),
    dataError: (state, action) => ({
      ...state,
      error: action.payload,
      status: "error",
    }),
    resetDataReducer: () =>  ({
        columns,
    })
  },
});

export const { dataStart, dataSuccess, dataError, resetDataReducer } =
  dataSlice.actions;

export default dataSlice.reducer;
