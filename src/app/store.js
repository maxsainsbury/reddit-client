import { configureStore } from '@reduxjs/toolkit';
import  contentReducer  from '../components/ContentBox/ContentSlice';

export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});
