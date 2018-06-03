import { SET_SEARCH_USER, SET_SEARCH_FAILURE } from '../actions/types';

const DEFAULT_STATE = {
  playerinfo:false
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_SEARCH_USER:
      return {
        playerinfo:action.information
      };
    case SET_SEARCH_FAILURE:
    return{
        playerinfo: !!(Object.keys(action.payload).length)
    };
    default:
      return state;
  }
}