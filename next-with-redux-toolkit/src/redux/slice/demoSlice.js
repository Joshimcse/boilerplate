import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("demo/getData", async (q, thunkAPI) => {
  try {
    const response = await axios.get(`/`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const initialState = {
  value: 0,
};

export const demoSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    setValue: (state, action) => {},
  },
  extraReducers: {
    [getData.pending]: (state) => {},
    [getData.fulfilled]: (state, { payload }) => {},
    [getData.rejected]: (state, { payload }) => {},
  },
});

export const { setValue } = demoSlice.actions;

export default demoSlice.reducer;
