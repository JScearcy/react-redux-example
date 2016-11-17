import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { accomplishmentReducer, initialAccomplishmentState } from './reducers';

let reducer = combineReducers({
  accomplishments: accomplishmentReducer
});

let initialState = {
  accomplishments: initialAccomplishmentState
}

let store = createStore(reducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
