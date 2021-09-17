import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../App'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
