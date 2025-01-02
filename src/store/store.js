// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './task';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});