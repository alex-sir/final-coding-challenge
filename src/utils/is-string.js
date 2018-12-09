/**
 * isString(x)
 * ----------
 * Returns true if x is a Javascript String
 * Returns false if x is not a Javascript String
 * Hint: Need both typeof and instanceof
 */

function isString(x) {
    return typeof x === 'string' || x instanceof String;
}

module.exports = isString;