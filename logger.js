const logger = (store) => (next) => (action) => {
  console.group('logger');
  // console.log(`curent state = ${store.getState()}`);
  console.log('next(action) // action = ', action);
  next(action);
  // console.log('next state', store.getState());
  console.groupEnd('logger');
  console.log('---');
};

exports.logger = logger;
