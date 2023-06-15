import { createAction, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./users-operations";

const InitialState = {
  users: {
    items: [],
    following: [],
    isLoading: false,
    error: null,
  },
};
const handlePending = (state) => {
  state.users.isLoading = true;
};

const handleRejected = (state, action) => {
  state.users.isLoading = false;
  state.users.error = action.payload;
};
export const changeFilterValue = createAction("tweets/changeFilterValue");

const appSlice = createSlice({
  name: "tweets",
  initialState: InitialState,
  extraReducers: {
    [fetchUsers.pending]: handlePending,
    [fetchUsers.fulfilled](state, action) {
      state.users.isLoading = false;
      state.users.error = null;
      state.users.items = action.payload;
    },
    [fetchUsers.rejected]: handleRejected,
  },
});

export const appReducer = appSlice.reducer;

// Selectors
export const getItems = (state) => state.tweets.users.items;
export const getLoad = (state) => state.tweets.users.isLoading;
export const getError = (state) => state.tweets.users.error;
