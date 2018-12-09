var chai = require('chai');
var filter = require('../../src/arrays/filter');
var expect = chai.expect;

describe('filter', function() {
    it('should return a new array with elements that match the filter', function() {
        var input = [1, 2, 3, 4];
        var output = filter(input, isOdd);

        expect(output).to.have.lengthOf(2);
        expect(output).to.have.members([1, 3]);
    });

    it('should return a new array with elements that match the filter', function() {
        var input = [1, 2, 3, 4];
        var output = filter(input, isEven);

        expect(output).to.have.lengthOf(2);
        expect(output).to.have.members([2, 4]);
    });

    it('should return a new array with all elements when the filter returns true', function() {
        var input = [1, 2, 3, 4];
        var output = filter(input, alwaysTrue());

        expect(output).to.have.lengthOf(4);
        expect(output).to.have.members(input);
    });

    it('should return a new array with no elements when the filter returns false', function() {
        var input = [1, 2, 3, 4];
        var output = filter(input, alwaysFalse);

        expect(output).to.have.lengthOf(0);
    });

    function isOdd(x) {
        return x % 2 === 1;
    }

    function isEven(x) {
        return x % 2 === 0;
    }

    function alwaysTrue() {
        return true;
    }

    function alwaysFalse() {
        return false;
    }
});