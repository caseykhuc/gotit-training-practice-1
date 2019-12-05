//import { createStore, applyMiddleware } from 'redux';
const { createStore, applyMiddleware } = require('redux');
const { thunk } = require('./thunk');
const { logger } = require('./logger');
const { fetchItems, fetchItemsOld } = require('./actions');
const store = createStore(() => {}, applyMiddleware(logger, thunk));

const test = async () => {
  const result = await store.dispatch(fetchItems());
  //store.dispatch(fetchItemsOld());

  console.group('___result');
  console.log(result);
  console.groupEnd();
};

test();
