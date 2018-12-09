/**
 * keys(obj)
 * ----------
 * Returns all the keys associated with the current object.
 * DO NOT use the built in Object.keys()
 *
 * var x = {
 *     key1: true,
 *     key2: 2,
 *     key3: {
 *         nested1: 'JavaScript'
 *     }
 * };
 *
 * keys(x) ==> ['key1', 'key2', 'key3']
 * keys(x.key3) ==> ['nested1']
 */

function keys(obj) {
    var newArray = [];
    var count = 0;

    for (var property in obj) {
        newArray[count] = property;
        count++;
    }
    return newArray
}

module.exports = keys;