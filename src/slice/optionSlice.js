import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
  };

  const optionSlice = createSlice({
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


export const { addItem, removeItem } = optionSlice.actions;
export default optionSlice.reducer;