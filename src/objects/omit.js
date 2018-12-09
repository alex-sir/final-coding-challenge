/**
 * omit(obj, keys)
 * ----------
 * Returns a new object without the specified keys.
 * keys is an array of property keys that should be
 * omitted in the new object. Shallow copy is fine.
 * You only need to omit keys at the first level.
 *
 * var x = {
 *     key1: true,
 *     key2: 2,
 *     key3: {
 *         nested1: 'JavaScript'
 *     }
 * };
 *
 * omit(x, ['key2', 'key3']) ==> {
 *     key1: true
 * }
 * omit(x, ['nested1']) ==> {
 *     key1: true,
 *     key2: 2,
 *     key3: {
 *         nested1: 'JavaScript'
 *     }
 * }
 */

function omit(obj, keys) {
    var newObj = {};
    var count = 0;

    for (var property in obj) {
        if (property === keys[count]) {
            null;
            count++;
        } else {
            newObj[property] = obj[property];
        }
    }
    return newObj;
}

module.exports = omit;