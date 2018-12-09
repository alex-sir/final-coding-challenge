/**
 * isUndefined(x)
 * ----------
 * Returns true if x is not defined
 * Returns false if x is a defined typedf
 */

function isUndefined(x) {
    return typeof x === 'undefined';
}

module.exports = isUndefined;