/**
 * times(fn, n)
 * ----------
 * Returns a function that only allows function fn
 * to be invoked n times. Any further invocations
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
 * var addTwice = times(add, 2);
 * var result = addTwice(2, 3);
 * // result is 5
 * // add is called with 2, 3
 * result = addTwice(4, 4);
 * // result is 8
 * // add is called with 4, 4
 * result = addTwice(1, 5);
 * // result is 8
 * // add is not called
 * // the last result is returned (8)
 */

function times(fn, n) {
    var count = 0;
    var value;

    return function () {
        if (count < n) {
            value = fn.apply(this, arguments);
        }

        count++;
        return value;
    }
}

module.exports = times;