/**
 * Write a function that can memoize (remember) the output for any function if we pass same arguments.
 */

const addNumbers = (...args) => args.reduce((acc, cur) => acc + cur, 0);

const memoize = (cb) => {
  const cache = {};

  return (...args) => {
    const query = JSON.stringify(args);
    if (query in cache) {
      console.log(`fetching from cache for args : ${query}`);
      return cache[query];
    } else {
      console.log("args is not in the cache");
      const result = cb.apply(this, args);
      cache[query] = result;
      return result;
    }
  };
};

const add = memoize(addNumbers);
// console.log(add(1, 2, 3));
// console.log(add(4, 5, 6));
// console.log(add(1, 2, 3));
// console.log(add(4, 5, 6));

const fact = (num) => {
  if (num === 0) return 1;
  return num * fact(num - 1);
};

const factorial = memoize(fact);

console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(4));
