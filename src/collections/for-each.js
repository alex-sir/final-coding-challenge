/**
 * forEach(collection, cb)
 * ----------
 * Iterates over each item in collection.
 * On each iteration, it invokes the cb function.
 *
 * For strings, the callback should be invoked for each character in the string.
 * The callback should be invoked with the following parameters:
 *     cb( character, position, fullString )
 *     character is the current character being iterated over
 *     position is the index the character is at
 *     fullString is the original string being iterated on
 *
 * For arrays, the callback should be invoked for each element in the array.
 * The callback should be invoked with the following parameters:
 *     cb( element, index, collection )
 *     element is the current character being iterated over
 *     index is the position of the element in the collection
 *     collection is the array being iterated on
 *
 * For objects, the callback should be invoked for each key in the object.
 *     cb( value, key, object )
 *     value is the value stored at the current key in the object
 *     key is the current key being iterated over
 *     object is the original object being iterated on
 *
 * For all other data types (undefined, null, number, boolean, etc...) throw an exception
 */

function forEach(collection, cb) {

    if (collection === null) {
        throw new Error('Collection is null');
    }

    if (typeof collection === 'string' ||
        typeof collection === 'object') {

        if (typeof collection === 'string') {
            var character = collection.charAt(0);
            var position = 0;
            var fullString = collection;

            for (var i = 0; i < collection.length; i++) {
                cb.call(this, character, position, fullString);
                character = collection.charAt(i + 1);
                position = i + 1;
            }
        }

        if (collection instanceof Array) {
            var element = collection[0];
            var index = 0;
            var collection = collection;

            for (var i = 0; i < collection.length; i++) {
                cb.call(this, element, index, collection);
                element = collection[i + 1];
                index = i + 1;
            }
        }

        if (typeof collection === 'object' && collection instanceof Array === false) {
            var value;
            var key;
            var object = collection;

            for (var property in collection) {
                value = collection[property];
                key = property;
                cb.call(this, value, key, object);
            }
        }

    } else {
        throw new Error('Invalid data type');
    }

}

module.exports = forEach;