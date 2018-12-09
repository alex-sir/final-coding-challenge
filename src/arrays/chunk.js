/**
 * chunk(ray, n)
 * ----------
 * Takes a single dimensional array as input and
 * returns a multi dimensional array where each
 * element is an array of size n, filled with the
 * elements from the original ray. If there are not enough
 * elements to fill the final array chunk, do not create
 * empty cells (see example 3 below)
 * Hint: Slice
 *
 * chunk([1, 2, 3, 4, 5, 6], 2) ==> [[1, 2], [3, 4], [5, 6]]
 * chunk([1, 2, 3, 4, 5, 6], 3) ==> [[1, 2, 3], [4, 5, 6]]
 * chunk([1, 2, 3, 4, 5], 3) ==> [[1, 2, 3], [4, 5]]
 */

function chunk(ray, n) {
    var multiArray = [];
    var startSlice = 0;
    var endSlice = n;

    for (var i = 0; i < ray.length/n; i++) {
        multiArray[i] = ray.slice(startSlice, endSlice);
        startSlice = endSlice;
        endSlice += n;
    }

    return multiArray;
}

module.exports = chunk;