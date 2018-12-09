/**
 * filter(ray, fn)
 * ----------
 * Returns a new array will all the elements
 * from ray that return true when executed
 * on function fn.
 *
 * filter([1, 2, 3], isOdd) ==> [1, 3]
 * filter([1, 2, 3], alwaysTrue) ==> [1, 2, 3]
 * filter([1, 2, 3], alwaysFalse) ==> []
 *
 * function isOdd(x) {
 *     return x % 2 === 1;
 * }
 *
 * function alwaysTrue(x) {
 *     return true;
 * }
 *
 * function alwaysFalse(x) {
 *     return false;
 * }
 */

function filter(ray, fn) {
    var newArray = [];

    for (var i = 0; i < ray.length; i++) {
        if(fn === true) {
            newArray = ray.slice(0);
            break;
        } else if (fn(ray[i]) === true) {
            newArray.push(ray[i]);
        }
    }
    return newArray;
}

module.exports = filter;