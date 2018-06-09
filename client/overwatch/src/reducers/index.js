import { combineReducers } from 'redux';
import auth from './authReducer'
import search from './searchReducer'
import invite from './inviteReducer'
export default combineReducers({
    auth,
    search,
    invite
});