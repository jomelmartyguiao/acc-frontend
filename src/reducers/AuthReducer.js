import {
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL
} from '../actions/types';
  
const INITIAL_STATE = { loading: false, data: null, error: null  };
  
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return { ...state, loading: true };
		case LOGIN_USER_SUCCESS:
			return { ...state, loading: false };
		case LOGIN_USER_FAIL:
			return { ...state, loading: false };
		default:
			return state;
    }
};
  