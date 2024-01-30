import { configureStore } from '@reduxjs/toolkit';
import taskItemsReducer from './taskSlice';

const store = configureStore({
  reducer: {
    taskItems: taskItemsReducer,
  },
});

export default store;
