//import { createStore, applyMiddleware } from 'redux';
const { createStore, applyMiddleware } = require('redux');
const { thunk } = require('./thunk');
const { logger } = require('./logger');
const { fetchItems, fetchItemsOld } = require('./actions');
const store = createStore(() => {}, applyMiddleware(logger, thunk));

//store.dispatch(fetchItems());
store.dispatch(fetchItemsOld());
