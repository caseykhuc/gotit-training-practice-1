const get = () =>
  new Promise((resolve, reject) => {
    const x = Math.round(Math.random());

    setTimeout(() => (x ? resolve('data') : reject('err')), 1000);
  });

exports.get = get;
