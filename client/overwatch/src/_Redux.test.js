import * as actions from './actions';
import * as types from './actions/types.js';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import expect from 'expect';


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
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWFmZjhkYTNlZTMyMjEyOGMzYzQ3OWVhIiwiaWF0IjoxNTI3ODk3MDU1fQ.j-NitJaffApswaka3Imct_YMp3wIBidAWBQleavGrHo"

describe('login action', () => {

    beforeEach(function () {
      moxios.install();
    });
  
    afterEach(function () {
      moxios.uninstall();
    });
  
    it('should dispatch SET_CURRENT_USER and receive token', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response:token
        });
      });
  
      const expectedActions = [
        {type: actions.SET_CURRENT_USER, user:token}

      ];
  
      const store = mockStore({ user: {} })
  
      return store.dispatch(actions.login()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });