const logger = (store) => (next) => (action) => {
  console.group('___logger');
  // console.log(`curent state = ${store.getState()}`);
  console.log('next(action) // action = ', action);
  // return middleware result
  const result = next(action);
  // console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

exports.logger = logger;
