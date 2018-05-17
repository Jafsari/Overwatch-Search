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


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);


if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  // prevent someone from manually setting a key of 'jwtToken' in localStorage
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch(e) {
    store.dispatch(setCurrentUser({}))
  }
}

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root'));
