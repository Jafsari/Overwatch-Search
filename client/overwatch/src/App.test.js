import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { createStore,applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import App from './App';
import Login from './containers/Login.jsx';
import Modal from './components/Modal.jsx';
import { loadState, saveState } from './localStorage.js';
import reduxThunk from 'redux-thunk';
import Chat from './containers/Chat.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('Login Component renders correctly', () => {  
  const persistedState = loadState();
  const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
const tree = renderer.create(<Login store={store} />).toJSON();
expect(tree).toMatchSnapshot();
});

describe('Modal Component renders Correctly', () => {
  const tree = renderer.create(<Modal />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Chat renders correctly', () => {
  const persistedState = loadState();
  const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
  const tree = renderer.create(<Chat store={store} />).toJSON();
  expect(tree).toMatchSnapshot();
})







