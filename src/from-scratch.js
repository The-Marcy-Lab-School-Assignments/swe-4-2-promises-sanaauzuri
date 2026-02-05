const resolvedWrapper = (value) => {
  return Promise.resolve(value)
};

const rejectedWrapper = (errorMessage) => {
  return Promise.reject(new Error(errorMessage));
};

const handleResolvedPromise = (promise) => {
  return promise.then((value) => {
    console.log(value);
    return value.toUpperCase();
  });
};

const handleResolvedOrRejectedPromise = (promise) => {
  return promise
  .then((value) => {
    console.log(value);
    return value.toUpperCase();
  })
  .catch((error) => {
    console.error(`Your error message was: ${error.message}`)
    return null
  });
};

const pauseForMs = (ms) => {
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
