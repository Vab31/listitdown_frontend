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
      state.items = action.payload;
      console.log('items', state.items);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item._id !== itemId);
    },
  },
});


export const { addItem, removeItem } = storeSlice.actions;
export default storeSlice.reducer;



  
 


