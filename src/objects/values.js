/**
 * values(obj)
 * ----------
 * Returns all the values stored with the current object.
 * DO NOT use the built in Object.values()
 *
 * var x = {
 *     key1: true,
 *     key2: 2,
 *     key3: {
 *         nested1: 'JavaScript'
 *     }
 * };
 *
 * values(x) ==> [true, 2, { nested1: 'JavaScript' }]
 * values(x.key3) ==> ['JavaScript']
 */

function values(obj) {
    var newArray = [];
    var count = 0;

    for (var property in obj) {
        newArray[count] = obj[property];
        count++;
    }
    return newArray
}

module.exports = values;