import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../createStore';

type user = {
  token: string;
  name: string;
  firstName: string;
};

const initialState: user = { token: '', name: '', firstName: '' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<{ name: string }>) => {
      state.name = action.payload.name;
    },
    setFirstName: (state, action: PayloadAction<{ firstName: string }>) => {
      state.firstName = action.payload.firstName;
    },
    setToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
  },
});

export const { setName, setToken, setFirstName } = userSlice.actions;
export default userSlice.reducer;

export const nameState = (state: RootState) => state.userSlice.name;
export const tokenState = (state: RootState) => state.userSlice.token;
export const firstNameState = (state: RootState) => state.userSlice.firstName;
