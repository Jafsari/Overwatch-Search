import { SET_USER_INVITE,SET_USER_INVITE_LOADING,SET_USER_INVITE_FAILURE } from '../actions/types';

const DEFAULT_STATE = {
  invite :false
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_USER_INVITE:
      return {
        invite: action.response
      };
      case SET_USER_INVITE_LOADING:
      return{
        invite:action.info
      };
      case SET_USER_INVITE_FAILURE:
      return{
        invite:action.info
      }
    default:
      return state;
  }
}