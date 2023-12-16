import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './eventsSlices';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});
