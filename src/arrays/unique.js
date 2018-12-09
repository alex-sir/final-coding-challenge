/**
 * unique(ray)
 * ----------
 * Returns a new array will all the unique elements
 * from ray. No duplicates!
 *
 * unique([1, 2, 1, 2]) ==> [1, 2]
 * unique([1, 2, '1']) ==> [1, 2, '1']
 *
 * Hint: indexOf
 */

function unique(ray) {
    var newArray = [];
    var uniqueElementsLocations = [];

    for (var i = 0; i < ray.length; i++) {
        var element = ray[i];
        var uniqueElement = ray.indexOf(element);
        uniqueElementsLocations.push(uniqueElement);
    }

    for (var i = 0; i < uniqueElementsLocations.length; i++) {
        var tempElement = uniqueElementsLocations[i];
        var elementCount = 0;
        for (var j = 0; j < uniqueElementsLocations.length; j++) {
            if (tempElement === uniqueElementsLocations[j]) {
                elementCount++;
            }
            if (elementCount === 2) {
                uniqueElementsLocations.splice(j, 1);
            }
        }
    }

    for (var i = 0; i < uniqueElementsLocations.length; i++) {
        newArray.push(ray[uniqueElementsLocations[i]]);
    }

    return newArray;
}

module.exports = unique;