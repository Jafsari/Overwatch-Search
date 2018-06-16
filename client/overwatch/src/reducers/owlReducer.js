import { SET_CURRENT_OWL,SET_CURRENT_TEAM, SET_CURRENT_TEAM_LOADING } from '../actions/types';

const DEFAULT_STATE = {
  current:false,
  team:false

};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_CURRENT_OWL:
      return {
        current:action.information
      };
    case SET_CURRENT_TEAM:
    return{
        team:action.information
    }
    case SET_CURRENT_TEAM_LOADING:
    return{
      team:action.info
    };
    default:
      return state;
  }
}