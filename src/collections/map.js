/**
 * map(collection, cb)
 * ----------
 * Returns a new array created by iterating over each item in the collection
 * and using the value returned after transforming it with the callback function.
 * On each iteration, it invokes the cb function and uses this transformed value
 * in the new collection.
 *
 * This method is exactly like forEach except for it creates a new collection
 * with the result returned from cb. The callback should be invoked the same
 * way based on the collection being a string, array, or object.
 *
 * For all other data types (undefined, null, number, boolean, etc...) throw an exception
 */

function map(collection, cb) {

    if (collection === null) {
        throw new Error('Collection is null');
    }

    var newArray = [];

    if (typeof collection === 'string' ||
        typeof collection === 'object') {

        if (typeof collection === 'string') {
            var character = collection.charAt(0);
            var position = 0;
            var fullString = collection;

            for (var i = 0; i < collection.length; i++) {
                newArray.push(cb.call(this, character, position, fullString));
                character = collection.charAt(i + 1);
                position = i + 1;
            }
            return newArray;
        }

        if (collection instanceof Array) {
            var element = collection[0];
            var index = 0;
            var collection = collection;

            for (var i = 0; i < collection.length; i++) {
                newArray.push(cb.call(this, element, index, collection));
                element = collection[i + 1];
                index = i + 1;
            }
            return newArray;
        }

        if (typeof collection === 'object' && collection instanceof Array === false) {
            var value;
            var key;
            var object = collection;

            for (var property in collection) {
                value = collection[property];
                key = property;
                newArray.push(cb.call(this, value, key, object));
            }
            return newArray;
        }

    } else {
        throw new Error('Invalid data type');
    }

}

module.exports = map;