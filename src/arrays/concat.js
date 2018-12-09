/**
 * concat(a, b)
 * ----------
 * Creates a new array with all the elements from
 * array a and array b. Return the new array will all
 * elements.
 *
 * concat([1, 2], [3, 4]) ==> [1, 2, 3, 4]
 * concat([], [1, 2, 3]) ==> [1, 2, 3]
 * concat(['a', 'b', 'c'], ['a', 'b']) ==> ['a', 'b', 'c', 'a', 'b']
 */

function concat(a, b) {
    if (a instanceof Array && b instanceof Array) {
        var concatArray = [];
        concatArray.push.apply(concatArray, a);
        concatArray.push.apply(concatArray, b);
        return concatArray;
    } else {
        return false;
    }
}

module.exports = concat;