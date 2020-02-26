import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import comics from './reducers/comics.js';
import currentUser from './reducers/currentUser.js';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    comics: comics,
    currentUser: currentUser
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;