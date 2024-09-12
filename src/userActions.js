import axios from 'axios';
import { fetchUsersSuccess,fetchUsersFail,fetchUsersRequest } from './userSlice';
import { server } from './store';



export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(fetchUsersRequest());
    const { data } = await axios.get(`${server}`);
    dispatch(fetchUsersSuccess(data.users));
  } catch (error) {
    dispatch(fetchUsersFail(error.response.data.message));
  }
};
