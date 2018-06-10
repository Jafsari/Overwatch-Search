import { SET_CURRENT_VIDEO_LIST, SET_CURRENT_STREAM } from '../actions/types';

const DEFAULT_STATE = {
    information:false,
    videos:false
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_CURRENT_VIDEO_LIST:
      return {
        information:action.info
      };
    case SET_CURRENT_STREAM:
    return{
        information:action.info
    }
    default:
      return state;
  }
}