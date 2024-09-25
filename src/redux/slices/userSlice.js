import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserName = createAsyncThunk('user/fetchUserName', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await response.json();
  return data.name;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserName.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.name = action.payload;
      })
      .addCase(fetchUserName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setUserName } = userSlice.actions;
export default userSlice.reducer;
