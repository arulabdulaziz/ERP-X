import { createSlice } from '@reduxjs/toolkit';

const clientSlice = createSlice({
  name: 'client',
  initialState: {
    clients: [],
  },
  reducers: {
    addClient: (state, action) => {
      state.clients.push(action.payload);
    },
  },
});

export const { addClient } = clientSlice.actions;
export default clientSlice.reducer;
