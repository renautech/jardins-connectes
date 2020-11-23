const logMiddleware = (store) => (next) => (action) => {
  console.log(store.getState());
  next(action);
};

export default logMiddleware;
