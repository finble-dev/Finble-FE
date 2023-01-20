import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface user {
  token: string;
  name: string;
}

const initialState: user = { token: '', name: '' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userReducer: (state, action) => {
      state.name = action.payload;
      // state.token = action.payload;
    },
  },
});

export const { userReducer } = userSlice.actions;
export default userSlice.reducer;
