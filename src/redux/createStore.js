import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddle from 'redux-saga';
import { logger } from 'redux-logger';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleWare = createSagaMiddle();
const middlewares = [sagaMiddleWare];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleWare.run(rootSaga);

export default store;
