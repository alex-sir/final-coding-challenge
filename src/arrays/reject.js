/**
 * reject(ray, fn)
 * ----------
 * Returns a new array will all the elements
 * from ray that return false when executed
 * on function fn. This is the opposite of filter.
 *
 * reject([1, 2, 3], isOdd) ==> [2]
 * reject([1, 2, 3], alwaysTrue) ==> []
 * reject([1, 2, 3], alwaysFalse) ==> [1, 2, 3]
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

function reject(ray, fn) {
    var newArray = [];

    for (var i = 0; i < ray.length; i++) {
        if(fn === false) {
            newArray = ray.slice(0);
            break;
        } else if (fn(ray[i]) === false) {
            newArray.push(ray[i]);
        }
    }
    return newArray;
}

module.exports = reject;