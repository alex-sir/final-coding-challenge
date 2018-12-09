/**
 * once(fn)
 * ----------
 * Returns a function that only allows function fn
 * to be invoked one time. Any further invocations
 * of the returned function will not invoke fn but
 * instead return the last value fn returned when it
 * was invoked the first time.
 *
 * * Hint: arguments, Array.prototype.slice.call
 *
 * function add(x, y) {
 *     return x + y;
 * }
 *
 * var addOnce = once(add);
 * var result = addOnce(2, 3);
 * // result is 5
 * // add is called with 2, 3
 * result = addOnce(4, 4);
 * // result is 5
 * // add is not called
 * // the last result is returned (5)
 */

function once(fn) {
    var done = false
    var value;

    return function () {
        if (!done) {
            done = true;
            value = fn.apply(this, arguments);
        }
        return value;
    };
}

module.exports = once;