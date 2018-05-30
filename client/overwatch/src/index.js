import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware, compose } from 'redux';
import reducers from './reducers'
import reduxThunk from 'redux-thunk'
import jwtDecode from 'jwt-decode';
import rootReducer from './reducers';
import { setCurrentUser,setAuthorizationToken } from './actions';
import App from './App';
import { loadState, saveState } from './localStorage.js';
import throttle from 'lodash/throttle';
import logger from 'redux-logger'


const persistedState = loadState();
console.log(persistedState)
const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(reduxThunk,logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

store.subscribe(throttle(() => {
  saveState({
    auth: store.getState().auth
  });
}),1000);

// if (localStorage.jwtToken) {
//   setAuthorizationToken(localStorage.jwtToken);
//   // prevent someone from manually setting a key of 'jwtToken' in localStorage
//   try {
//     store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
//   } catch(e) {
//     console.log(e)
//   }
// }

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.querySelector('#root'));
