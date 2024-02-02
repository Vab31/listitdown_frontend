// jsonSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idno:0,
};

const hackathonidSlice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    addItem: (state, action) => {
     console.log("inside reducer")
      console.log(action.payload)
      state.idno=action.payload;
      console.log('id inside',state.idno);

    },
//     removeItem: (state, action) => {
//       state.items = state.idno.filter((item) => item.id !== action.payload.idno);
//     },
  },
});

export const { addItem} = hackathonidSlice.actions;
export default hackathonidSlice.reducer;
