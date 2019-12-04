// get() is one of our utilities for creating GET API calls
/*

*/

// thunk

const thunk = (store) => (next) => async (action) => {
  // console.log(action);
  // console.log(action.hasOwnProperty('promise'));

  if (typeof action === 'function') {
    action(store.dispatch, store.getState);
  } else if (action.hasOwnProperty('promise')) {
    console.log('REQUEST//SUCCESS//FAILURE PATTERN');
    store.dispatch({ type: action.type });
    try {
      const result = await action.promise;
      store.dispatch({ type: `${action.type}_SUCCESS`, payload: result });
    } catch (e) {
      store.dispatch({ type: `${action.type}_FAILURE`, payload: e });
    }
  } else {
    next(action);
  }
};

exports.thunk = thunk;
