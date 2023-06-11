import { combineReducers } from '@reduxjs/toolkit';
import { formReducer } from './form/formSlice';

export const reducer = combineReducers({
  form: formReducer,
});
