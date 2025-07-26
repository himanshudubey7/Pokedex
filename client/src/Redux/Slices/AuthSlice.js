import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Set your API base URL
const BASE_URL = 'http://localhost:5000/api/v1/auth';

// ========== LOGIN ==========
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, credentials, {
        withCredentials: true, // needed to receive cookies from server
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Login failed');
    }
  }
);

// ========== SIGNUP ==========
export const signup = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/signup`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Signup failed');
    }
  }
);

// ========== LOGOUT ==========
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/logout`, {}, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Logout failed');
    }
  }
);

// ========== Auth Slice ==========
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    user: null,
    isLoggedIn: false,
    role: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // === LOGIN ===
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.role = action.payload.user.role;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // === SIGNUP ===
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.role = action.payload.user.role;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // === LOGOUT ===
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.role = null;
      state.error = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;



