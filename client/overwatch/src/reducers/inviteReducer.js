import { SET_USER_INVITE,SET_USER_INVITE_LOADING,SET_USER_INVITE_FAILURE } from '../actions/types';

const DEFAULT_STATE = {
  inviteInfo :false
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_USER_INVITE:
      return {
        inviteInfo: action.response
      };
      case SET_USER_INVITE_LOADING:
      return{
        inviteInfo:action.info
      };
      case SET_USER_INVITE_FAILURE:
      return{
        inviteInfo:action.info
      }
    default:
      return state;
  }
}