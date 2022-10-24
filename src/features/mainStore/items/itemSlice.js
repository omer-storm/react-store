import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import itemService from "./itemService";

const initialState = {
  allItems: [],
  filteredItems: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get items
export const getItems = createAsyncThunk(
  "items/getAll",
  async (_, thunkAPI) => {
    try {
      return await itemService.getItems();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get items
export const getFilteredItems = createAsyncThunk(
  "items/getFilteredItems",
  async (category, thunkAPI) => {
    try {
      return await itemService.getFilteredItems(category);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allItems = action.payload;
      })
      .addCase(getItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getFilteredItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFilteredItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.filteredItems = action.payload;
      })
      .addCase(getFilteredItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, setFilteredItems } = itemSlice.actions;
export default itemSlice.reducer;
