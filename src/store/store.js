// store.js

import { configureStore } from '@reduxjs/toolkit';
import storeReducer from '../slice/storeSlice';
import hackathonidReducer from '../slice/hackathonidSlice';
import optionReducer from '../slice/optionSlice';

const store = configureStore({
  reducer: {
    data: storeReducer,
    id: hackathonidReducer,
    option:optionReducer 
  },
});

export default store;
