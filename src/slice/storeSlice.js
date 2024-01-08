// jsonSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items:[],
};

const storeSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items=action.payload;
      console.log('items',state.items);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = storeSlice.actions;
export default storeSlice.reducer;



  
 


