import { configureStore } from '@reduxjs/toolkit';
import { events } from './slices';

export const store = configureStore({
  reducer: {
    events: events.eventsSlice.reducer,
  },
});
