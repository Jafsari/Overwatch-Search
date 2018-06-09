import { SET_CURRENT_VIDEO_LIST } from '../actions/types';

const DEFAULT_STATE = {
    information:false
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_CURRENT_VIDEO_LIST:
      return {
        information:action.info
      };
    default:
      return state;
  }
}