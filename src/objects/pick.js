/**
 * pick(obj, keys)
 * ----------
 * Returns a new object with only the specified keys.
 * keys is an array of property keys that should be
 * kept in the new object. Shallow copy is fine.
 * You only need to pick keys at the first level.
 *
 * var x = {
 *     key1: true,
 *     key2: 2,
 *     key3: {
 *         nested1: 'JavaScript'
 *     }
 * };
 *
 * pick(x, ['key1', 'key2']) ==> {
 *     key1: true,
 *     key2: 2
 * }
 * pick(x, ['key1', 'nested1']) ==> {
 *     key1: true
 * }
 */

function pick(obj, keys) {
    var newObj = {};
    var count = 0;

    for (var property in obj) {
        if (property === keys[count]) {
            newObj[property] = obj[property];
            count++;
        }
    }
    return newObj;
}

module.exports = pick;