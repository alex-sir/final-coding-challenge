/**
 * isFunction(x)
 * ----------
 * Returns true if x is a Javascript Function
 * Returns false if x is not a Javascript Function
 */

function isFunction(x) {
    return typeof x === 'function';
}

module.exports = isFunction;