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
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, ms); 
});
};
// Q5
console.log('Starting...');

pauseForMs(1000).then(() => {
  console.log('1 second has passed!');
});

// Q4
handleResolvedOrRejectedPromise(Promise.resolve('success'))
  .then(console.log);
// Logs: success
// Then logs: SUCCESS

handleResolvedOrRejectedPromise(Promise.reject(new Error('oops')))
  .then(console.log);
// Logs (via console.error): Your error message was: oops
// Then logs: null

// Q3
const greetingPromise = Promise.resolve('hello world');

const loudPromise = handleResolvedPromise(greetingPromise);
// Logs: hello world

loudPromise.then(console.log);
// Logs: HELLO WORLD

// Q2
rejectedWrapper('Something went wrong')
  .catch((err) => {
    console.log(err.message);
    // Logs: Something went wrong
  });

// Q1
resolvedWrapper(10);
// Returns: Promise { 10 }

resolvedWrapper('hello');
// Returns: Promise { 'hello' }

resolvedWrapper('hello').then(console.log);
// Logs: hello