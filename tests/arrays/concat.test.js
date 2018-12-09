var chai = require('chai');
var concat = require('../../src/arrays/concat');
var expect = chai.expect;

describe('concat', function() {
    it('should return a new array with all the elements from array a and array b', function() {
        var inputA = ['a', 'b'];
        var inputB = [1, 2];
        var output = concat(inputA, inputB);

        expect(output).to.have.lengthOf(4);
        expect(output).to.have.members(['a', 'b', 1, 2]);
    });

    it('should return a new array with all the elements from array a and array b', function() {
        var inputA = ['a', 'b'];
        var inputB = [];
        var output = concat(inputA, inputB);

        expect(output).to.have.lengthOf(2);
        expect(output).to.have.members(['a', 'b']);
    });

    it('should return a new array with all the elements from array a and array b', function() {
        var inputA = [];
        var inputB = [1, 2];
        var output = concat(inputA, inputB);

        expect(output).to.have.lengthOf(2);
        expect(output).to.have.members([1, 2]);
    });

    it('should return an empty array when concatenating two empty arrays', function() {
        var inputA = [];
        var inputB = [];
        var output = concat(inputA, inputB);

        expect(output).to.have.lengthOf(0);
    });

    it('should create a new array as output', function() {
        var inputA = ['a', 'b'];
        var inputB = [1, 2];
        var output = concat(inputA, inputB);

        expect(output).to.not.equal(inputA);
        expect(output).to.not.equal(inputB);
    });
});