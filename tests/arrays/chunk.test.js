var chai = require('chai');
var chunk = require('../../src/arrays/chunk');
var expect = chai.expect;

describe('chunk', function() {
    it('should return a new array with chunks of size n from the input', function() {
        var input = [1, 2, 3, 4, 5, 6];
        var output = chunk(input, 2);

        expect(output).to.have.lengthOf(3);
        expect(output).to.eql([
            [1, 2],
            [3, 4],
            [5, 6]
        ]);
    });

    it('should return a new array with chunks of size n from the input', function() {
        var input = [1, 2, 3, 4, 5, 6];
        var output = chunk(input, 3);

        expect(output).to.have.lengthOf(2);
        expect(output).to.eql([
            [1, 2, 3],
            [4, 5, 6]
        ]);
    });

    it('should create a smaller last chunk if there are not enough elements', function() {
        var input = [1, 2, 3, 4, 5];
        var output = chunk(input, 3);

        expect(output).to.have.lengthOf(2);
        expect(output).to.eql([
            [1, 2, 3],
            [4, 5]
        ]);
    });

    it('should return a new array and not modify the input array', function() {
        var input = [1, 2, 3, 4, 5, 6];
        var output = chunk(input, 3);

        expect(output).to.not.equal(input);
    });
});