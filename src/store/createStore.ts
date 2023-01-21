import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import userSlice from './slice/userSlice';

// const rootReducer = combineReducers({
//   name: nameReducer,
//   token: tokenReducer,
// });

const store = configureStore({
  reducer: { userSlice: userSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
