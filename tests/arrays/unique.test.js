var chai = require('chai');
var unique = require('../../src/arrays/unique');
var expect = chai.expect;

describe('unique', function() {
    it('should return a new array with all the unique elements from the input', function() {
        var input = [1, 2, 1, 2];
        var output = unique(input);

        expect(output).to.have.lengthOf(2);
        expect(output).to.have.members([1, 2]);
    });

    it('should do type checking when comparing uniqueness', function() {
        var input = [1, 2, '1', 2];
        var output = unique(input);

        expect(output).to.have.lengthOf(3);
        expect(output).to.have.members([1, 2, '1']);
    });

    it('should return a new array and not modify the input', function() {
        var input = [1, 2, 1, 2];
        var output = unique(input);

        expect(output).to.not.equal(input);
    });
});