import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    createEvent: (state, action) => {
      state.events = action.payload;
    },
  },
});

export const { createEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
