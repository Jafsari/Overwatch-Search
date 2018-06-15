import { combineReducers } from 'redux';
import auth from './authReducer'
import search from './searchReducer'
import invite from './inviteReducer'
import stream from './streamReducer'
import owl from './owlReducer'
export default combineReducers({
    auth,
    search,
    invite,
    stream,
    owl
});