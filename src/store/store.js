// store.js

import { configureStore } from '@reduxjs/toolkit';
import storeReducer from '../slice/storeSlice';
import hackathonidReducer from '../slice/hackathonidSlice';

const store = configureStore({
  reducer: {
    data: storeReducer,
    id: hackathonidReducer,
  },
});

export default store;
