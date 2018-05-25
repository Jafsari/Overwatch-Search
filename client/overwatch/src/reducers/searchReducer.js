import { SET_SEARCH_USER } from '../actions/types';

const DEFAULT_STATE = {
  playerinfo:{}
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_SEARCH_USER:
      return {
        // turn an empty object into false or an object with keys to be true
        playerinfo:action.information
      };
    default:
      return state;
  }
}