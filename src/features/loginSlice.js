import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    jwt: '',  // Store JWT when user logs in
  },
  reducers: {
    login: (state, action) => {
      // Handle login - set isLoggedIn to true and store JWT
      state.isLoggedIn = true;
      state.jwt = action.payload.jwt;  // Assuming JWT is sent as part of payload
    },
    logout: (state) => {
      // Handle logout - reset login state and clear JWT
      state.isLoggedIn = false;
      state.jwt = '';
    },
  },
});

// Export actions
export const { login, logout } = loginSlice.actions;

// Export reducer
export default loginSlice.reducer;
