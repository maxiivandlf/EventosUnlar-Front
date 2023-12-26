import { createSlice } from '@reduxjs/toolkit';

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    isLoading: false,
    currentPage: 0,
    totalPages: 0,
    totalEvents: 0,
  },
  reducers: {
    startLoadingEvents: (state) => {
      state.isLoading = true;
    },
    setEvents: (state, action) => {
      state.isLoading = false;
      state.events = action.payload.events;
      state.currentPage = action.payload.page;
      state.totalPages = action.payload.totalPages;
      state.totalEvents = action.payload.totalEvents;
    },

    updateEvents: (state, action) => {
      state.isLoading = false;
      state.events = [...state.events, action.payload.events];
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setEvents, setPage, startLoadingEvents, updateEvents } =
  eventsSlice.actions;
