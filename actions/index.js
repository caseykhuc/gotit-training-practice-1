const { get } = require('../api');

const FETCH_ITEMS = 'FETCH_ITEMS';
const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

const fetchItemsOld = () => async (dispatch) => {
  dispatch({ type: FETCH_ITEMS });
  try {
    const result = await get('/items');
    dispatch({ type: FETCH_ITEMS_SUCCESS, payload: result });
  } catch (e) {
    dispatch({ type: FETCH_ITEMS_FAILURE, payload: e });
  }
};

// get() is one of our utilities for creating GET API calls
const fetchItems = () => ({ type: FETCH_ITEMS, promise: get('/items') });

exports.fetchItems = fetchItems;
exports.fetchItemsOld = fetchItemsOld;
