/**
 * wrap(x)
 * ----------
 * Returns a function that when invoked returns x.
 * This can be helpful when you need to pass a function
 * rather then a value, but only need that function to
 * return a single value anytime its invoked.
 *
 * Essentially we're wrapping a single value in a function invocation.
 *
 * var number1 = wrap(1);
 * var result = number1();
 * // result is 1
 *
 * var strJavascript = wrap('Javascript');
 * var result = strJavascript();
 * // result is 'Javascript'
 */

function wrap(x) {

    return function () {
        return x;
    }
}

module.exports = wrap;