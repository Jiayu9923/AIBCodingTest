import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import categoriesReducer from './reducers';
import watchFetchCategoriesSaga from './sagas';

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// For Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Store with middleware
const store = createStore(
    categoriesReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

// Run the Saga
sagaMiddleware.run(watchFetchCategoriesSaga);

export default store;