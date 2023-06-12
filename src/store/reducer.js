import { combineReducers } from '@reduxjs/toolkit';
import { formReducer } from './form/formSlice';
import { listReducer } from './list/listSlice';

export const reducer = combineReducers({
  form: formReducer,
  list: listReducer,
});
