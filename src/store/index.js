import reducer from './reducer';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,  composeEnhancers(applyMiddleware(thunk)));

export default store;
