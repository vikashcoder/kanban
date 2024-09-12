
import { createSlice } from '@reduxjs/toolkit';

const ticketSlice = createSlice({
  name: 'ticket',
  initialState: {
    tickets: [],
    loading: false,
    error: null,
    groupBy: 'status',
    sortBy: 'priority',
    statuses: ['Todo', 'In progress', 'Backlog', 'Cancelled', 'Done'], 
  },
  reducers: {
    fetchTicketsRequest: (state) => {
      state.loading = true;
    },
    fetchTicketsSuccess: (state, action) => {
      state.loading = false;
      state.tickets = action.payload;
    },
    fetchTicketsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
    setGroupBy: (state, action) => {
      state.groupBy = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { fetchTicketsRequest, fetchTicketsSuccess, fetchTicketsFail, clearErrors, setGroupBy, setSortBy } = ticketSlice.actions;

export default ticketSlice.reducer;
