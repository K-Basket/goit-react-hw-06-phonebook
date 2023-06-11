import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  number: '',
};

export const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const formReducer = formSlice.reducer;
export const { setName, setNumber } = formSlice.actions;
