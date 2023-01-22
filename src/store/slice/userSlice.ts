import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../createStore';

type user = {
  token: string;
  name: string;
};

const initialState: user = { token: '', name: '' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<{ name: string }>) => {
      state.name = action.payload.name;
    },
    setToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
  },
});

export const { setName, setToken } = userSlice.actions;
export default userSlice.reducer;

export const nameState = (state: RootState) => state.userSlice.name;
export const tokenState = (state: RootState) => state.userSlice.token;



