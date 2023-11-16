import { applyMiddleware, createStore, compose } from 'redux';
import thunk from "redux-thunk";
import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preLoadedState = {};

const middleWare = [thunk];
const store = createStore(
    rootReducer,
    preLoadedState,
    composeEnhancers(applyMiddleware(...middleWare)),
    );

export default store;