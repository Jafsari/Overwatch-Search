import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import { createStore,applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import App from './App';
import Signup from './containers/Signup.jsx';
import Login from './containers/Login.jsx';
import Landing from './containers/Landing.jsx'
import Modal from './components/Modal.jsx';
import Search from './containers/Search.jsx';
import Dashboard from './containers/Dashboard.jsx';
import Navigation from './components/Navigation.jsx';
import PlayerInfo from './containers/PlayerInfo.jsx';
import { loadState, saveState } from './localStorage.js';
import reduxThunk from 'redux-thunk';
import Chat from './containers/Chat.jsx';
import { BrowserRouter as Router } from "react-router-dom";
import Diamond from './components/Diamond.jsx'


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
  const tree = renderer.create(
    <Router>
  <Chat store={store} />
    </Router>
).toJSON();
  expect(tree).toMatchSnapshot();
});

export const CustomProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

// describe('Diamond Component renders correctly', () => {  
// const persistedState = loadState();
// var store = createStore(rootReducer,
//   persistedState,
//   compose(
//     applyMiddleware(reduxThunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   ));
// const tree = renderer.create(
// <CustomProvider>
// <Diamond store={store} />
// </CustomProvider> ).toJSON();
// expect(tree).toMatchSnapshot();
// });

describe('renders search component correctly', () => {
  const persistedState = loadState();
  const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
const tree = renderer.create(
  <Router>
<Search store={store} />
</Router>
).toJSON();
expect(tree).toMatchSnapshot();
})

describe('renders playerInfo component correctly', () => {
  const persistedState = loadState();
  const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
const tree = renderer.create(
<Router>
<PlayerInfo store={store} />
</Router>
).toJSON();
expect(tree).toMatchSnapshot();
});

describe('Signup Component renders correctly', () => {  
  const persistedState = loadState();
  const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
const tree = renderer.create(<Signup store={store} />).toJSON();
expect(tree).toMatchSnapshot();
});

describe('renders Dashboard component correctly', () => {
  const persistedState = loadState();
  const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
const tree = renderer.create(
  <Router>
<Dashboard store={store} />
</Router>
).toJSON();
expect(tree).toMatchSnapshot();
});

describe('renders Landing component correctly', () => {
  const persistedState = loadState();
  const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
const tree = renderer.create(
  <Router>
<Landing store={store} />
</Router>
).toJSON();
expect(tree).toMatchSnapshot();
});

describe('renders Navigation component correctly', () => {
const tree = renderer.create(
  <Router>
<Navigation />
</Router>
).toJSON();
expect(tree).toMatchSnapshot();
})








