import axios from 'axios';
import { fetchTicketsRequest, fetchTicketsSuccess, fetchTicketsFail } from './ticketSlice'
import { server } from './store';


export const fetchTickets = () => async (dispatch) => {
  try {
    dispatch(fetchTicketsRequest());
    const { data } = await axios.get(`${server}`);
    dispatch(fetchTicketsSuccess(data.tickets));
  } catch (error) {
    dispatch(fetchTicketsFail(error.response.data.message));
  }
};
