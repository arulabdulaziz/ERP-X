import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import userReducer from './slices/userSlice';
import clientReducer from './slices/clientSlice';

// Menggunakan combineReducers untuk menggabungkan beberapa reducer
const rootReducer = combineReducers({
  user: userReducer,
  client: clientReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: [thunk],
});

export default store;
