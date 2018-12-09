/**
 * reduce(ray, cb, initialValue)
 * -----------------------------
 * Returns a single value created by invoking the callback function for
 * each item in the array. On each iteration the callback is invoked
 * with the result (starts as initialValue) and the current element.
 *
 * THIS ONLY NEEDS TO WORK FOR ARRAYS (but extra credit if you can make it work
 * with objects and strings. hint: use the forEach method you created)
 *
 * The result of invoking the callback is stored, and used for the next iteration.
 * Once all iterations are complete, reduce returns the final result.
 */

// Includes objects and strings workings (I think)
function reduce(ray, cb, initialValue) {

    if (ray === null) {
        throw new Error('Collection is null');
    }

    if (typeof ray === 'string' ||
        typeof ray === 'object') {
        var value;

        if (typeof ray === 'string') {
            for (var i = 0; i < ray.length; i++) {
                value = cb.call(ray, initialValue, ray.charAt(i));
                initialValue = value;
            }
            return value;
        }

        if (ray instanceof Array) {
            for (var i = 0; i < ray.length; i++) {
                value = cb.call(ray, initialValue, ray[i]);
                initialValue = value;
            }
            return value;
        }

        if (typeof ray === 'object' && ray instanceof Array === false) {
            for (var property in ray) {
                value = cb.call(ray, initialValue, ray[property]);
                initialValue = value;
            }
            return value;
        }

    } else {
        throw new Error('Invalid data type');
    }
}

module.exports = reduce;