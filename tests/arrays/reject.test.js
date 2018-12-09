var chai = require('chai');
var reject = require('../../src/arrays/reject');
var expect = chai.expect;

describe('reject', function() {
    it('should return a new array without the elements rejected by the filter', function() {
        var input = [1, 2, 3, 4];
        var output = reject(input, isOdd);

        expect(output).to.have.lengthOf(2);
        expect(output).to.have.members([2, 4]);
    });

    it('should return a new array without the elements rejected by the filter', function() {
        var input = [1, 2, 3, 4];
        var output = reject(input, isEven);

        expect(output).to.have.lengthOf(2);
        expect(output).to.have.members([1, 3]);
    });

    it('should return a new array with no elements when the rejection filter returns true', function() {
        var input = [1, 2, 3, 4];
        var output = reject(input, alwaysTrue);

        expect(output).to.have.lengthOf(0);
    });

    it('should return a new array with all elements when the rejection filter returns false', function() {
        var input = [1, 2, 3, 4];
        var output = reject(input, alwaysFalse);

        expect(output).to.have.lengthOf(4);
        expect(output).to.have.members(input);
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