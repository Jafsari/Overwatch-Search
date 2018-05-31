import * as actions from './actions';
import * as types from './actions/types.js';

// export function setCurrentUser(user) {
//     return {
//       type: SET_CURRENT_USER,
//       user
//     };
//   }

// export function setCurrentName(user) {
//     return {
//       type: SET_CURRENT_NAME,
//       user
//     };
//   }

//   export function setSearchUser(information){
//     return{
//       type:SET_SEARCH_USER,
//       information
//     }
//   }

// export const SET_CURRENT_USER = 'SET_CURRENT_USER';
// export const SET_SEARCH_USER ='SET_SEARCH_USER';
// export const SET_CURRENT_NAME = 'SET_CURRENT_NAME';
// export const SET_CURRENT_TOKEN = 'SET_CURRENT_TOKEN';


describe('setCurrentUser', () => {
    it ('should create an action to set a user', () => {
        const user = 'justin'
        const expectedAction = {
            type: types.SET_CURRENT_USER,
            user
        }
        expect(actions.setCurrentUser(user)).toEqual(expectedAction)
    })
})

describe('setCurrentName', () => {
    it ('should set the name of the user', () => {
        const user = 'Alex'
        const expectedAction = {
            type: types.SET_CURRENT_NAME,
            user
        }
        expect(actions.setCurrentName(user)).toEqual(expectedAction)
    })
})

describe('setCurrentToken', () => {
    it ('should set the token of the user', () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWFmZjhkYTNlZTMyMjEyOGMzYzQ3OWVhIiwiaWF0IjoxNTI3NzQ1NjQ2fQ.r68JHd1BRTWhUXTqtoVkBMVGwzj6rp1Bn_cKdZ2XYA4"
        const expectedAction = {
            type: types.SET_CURRENT_TOKEN,
            token
        }
        expect(actions.setCurrentToken(token)).toEqual(expectedAction)
    })
})