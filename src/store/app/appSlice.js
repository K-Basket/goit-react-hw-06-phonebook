import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { reducer } from 'store/reducer';

const initialState = {
  contacts: [],
  filter: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setContacts: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },
    updateContacts: (state, action) => {
      state.contacts = action.payload;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const appReducer = appSlice.reducer;
export const { setContacts, setFilter, updateContacts } = appSlice.actions;
