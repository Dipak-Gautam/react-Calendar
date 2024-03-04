import { configureStore, createSlice } from "@reduxjs/toolkit";

const todaysDateSlice = createSlice({
  name: "todaysDate",
  initialState: { day: 1, month: 11, year: 1111 },
  reducers: {
    setTodaysDate: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const calendarDataSlice = createSlice({
  name: "calendarData",
  initialState: null,
  reducers: {
    setCalendarData: (state, action) => {
      console.log("Set calendar date called", action);
      state = action.payload;
      console.log("check", state);
    },
  },
});

const dateStore = configureStore({
  reducer: {
    todaysDate: todaysDateSlice.reducer,
    calendarData: calendarDataSlice.reducer,
  },
});

export const calendarDataAction = calendarDataSlice.actions;
export const todaysDateAction = todaysDateSlice.actions;
export default dateStore;
