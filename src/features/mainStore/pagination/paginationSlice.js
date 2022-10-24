import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
  currentPage: 1,
  itemsCount: 0,
  itemsPerPage: 6,
  paginationRowLength: 3,
  previousPages: [1, 2, 3],
  previousPageTop: 2,
  totalPages: 0,
  items: [],
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setTotalpages: (state, action) => {
      // console.log(action.payload)
      state.totalPages = Math.ceil(
        action.payload / state.itemsPerPage //itemCount is there in payload
      );
    },
    setItems: (state, action) => {
      const { currentPage, itemsPerPage } = state;
      const startIndex = (currentPage - 1) * itemsPerPage;
      state.items = _(action.payload)
        .slice(startIndex)
        .take(itemsPerPage)
        .value();
    },
    pageChange: (state, action) => {
      console.log(action.payload);
      const { page, filteredItems } = action.payload;
      state.currentPage = page;

      const { currentPage, itemsPerPage } = state;
      const startIndex = (currentPage - 1) * itemsPerPage;
      state.items = _(filteredItems)
        .slice(startIndex)
        .take(itemsPerPage)
        .value();
    },
    previousPageChange: (state, action) => {
      const { page, filteredItems } = action.payload;
      const index = state.previousPages.indexOf(page - 1);
      if (index === -1) {
        if (page > state.paginationRowLength) {
          state.previousPages[state.previousPageTop - 1] = page - 1;
          state.previousPages[state.previousPageTop] = page;
        }
      } else {
        state.previousPages[state.previousPageTop] = page + 1;
        state.previousPages[state.previousPageTop - 1] = page;
      }
      state.currentPage = page;

      const { currentPage, itemsPerPage } = state;
      const startIndex = (currentPage - 1) * itemsPerPage;
      state.items = _(filteredItems)
        .slice(startIndex)
        .take(itemsPerPage)
        .value();
    },
    nextPageChange: (state, action) => {
      const { page, filteredItems } = action.payload;
      let updatePreviousPageTop = state.previousPageTop;

      if (state.previousPageTop <= state.paginationRowLength) {
        updatePreviousPageTop++;
        state.previousPages[updatePreviousPageTop] = page;
      } else {
        if (page !== 4) {
          state.previousPages[updatePreviousPageTop - 1] = page - 1;
          state.previousPages[updatePreviousPageTop] = page;
        } else {
          state.previousPages[updatePreviousPageTop] = page + 1;
          state.previousPages[updatePreviousPageTop - 1] = page;
        }
      }
      state.previousPageTop = updatePreviousPageTop;
      state.currentPage = page;

      const { currentPage, itemsPerPage } = state;
      const startIndex = (currentPage - 1) * itemsPerPage;
      state.items = _(filteredItems)
        .slice(startIndex)
        .take(itemsPerPage)
        .value();
    },
  },
});

export const {
  reset,
  setTotalpages,
  setItems,
  pageChange,
  previousPageChange,
  nextPageChange,
} = paginationSlice.actions;
export default paginationSlice.reducer;
