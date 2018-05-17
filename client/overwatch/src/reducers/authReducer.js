import { LOG_IN, SIGN_UP } from '../actions/types'


export default (state = null, action) => {
  switch(action.type){
    case LOG_IN:
    return action.payload || false
    case SIGN_UP:
    return action.paylad || false
		default:
		return state;
	}
}