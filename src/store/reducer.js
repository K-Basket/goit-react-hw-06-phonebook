import { combineReducers } from '@reduxjs/toolkit';
import { formReducer } from './form/formSlice';
import { appReducer } from './app/appSlice';

export const reducer = combineReducers({
  form: formReducer,
  app: appReducer,
});
