/**
 * isArray(x)
 * ----------
 * Returns true if x is a Javascript Array
 * Returns false if x is not a Javascript Array
 */

function isArray(x) {
    return x instanceof Array;
}

module.exports = isArray;