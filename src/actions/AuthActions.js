import axios from 'axios';
import {
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './types';

export const login = (obj) => {
	return dispatch => {
		dispatch({ type: LOGIN_USER });
		axios
      .post(`${process.env.REACT_APP_ENDPOINT}/auth`, obj)
			.then(res => {
				window.location.replace('/dashboard');
				dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
			})
			.catch(err => {
				console.log("ERR: ", err.response)
					dispatch({ type: LOGIN_USER_FAIL });
			});
	};
};