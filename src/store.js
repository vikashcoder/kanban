import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from './ticketSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    ticket: ticketReducer,
    user: userReducer,
  },
});

export default store;


export const server = 'https://api.quicksell.co/v1/internal/frontend-assignment'; 
