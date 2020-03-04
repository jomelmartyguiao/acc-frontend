import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

const appReducer = combineReducers({
	state: (state = {}) => state,
	userInfo: AuthReducer
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;
