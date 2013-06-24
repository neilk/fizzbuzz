var _ = require('underscore');

_.range(1, 100, 1).map(
  function(m) {
    return _.compose(m(3, 'Fizz'), m(5, 'Buzz'), m(15, 'FizzBuzz'))
  }(
    function(mod, str) {
      return function(n) {
        return (typeof n == 'number' && !(n % mod)) ? str : n;
      };
    }
  )
).forEach(function(x) {
  console.log(x);
});


