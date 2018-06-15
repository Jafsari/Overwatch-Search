import { SET_CURRENT_OWL } from '../actions/types';

const DEFAULT_STATE = {
  current:false
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_CURRENT_OWL:
      return {
        current:action.information
      };
    default:
      return state;
  }
}