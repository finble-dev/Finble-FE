import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import { userReducer } from './slice/userSlice';

// const rootReducer = combineReducers({
//   name: nameReducer,
//   token: tokenReducer,
// });

const store = configureStore({
  reducer: userReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
