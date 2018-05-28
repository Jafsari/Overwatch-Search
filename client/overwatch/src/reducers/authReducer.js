import { SET_CURRENT_USER, SET_CURRENT_NAME, SET_CURRENT_TOKEN } from '../actions/types';

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {},
  token:{}
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        // turn an empty object into false or an object with keys to be true
        isAuthenticated: !!(Object.keys(action.user).length),
        user: action.user
      };
      case SET_CURRENT_TOKEN:
      return{
        token:action.token
      }
      case SET_CURRENT_NAME:
      return{
        name:action.user
      }
    default:
      return state;
  }
}