var chai = require('chai');
var isString = require('../../src/utils/is-string');
var expect = chai.expect;

describe('isString', function() {
    it('should return true for a string literal', function() {
        var input = 'JavaScript';
        var output = isString(input);

        expect(output).to.be.true;
    });

    it('should return true for a string class instance', function() {
        var input = new String('JavaScript');
        var output = isString(input);

        expect(output).to.be.true;
    });

    it('should return false for an object literal', function() {
        var input = {};
        var output = isString(input);

        expect(output).to.be.false;
    });

    it('should return false for an array literal', function() {
        var input = [];
        var output = isString(input);

        expect(output).to.be.false;
    });

    it('should return false for null', function() {
        var input = null;
        var output = isString(input);

        expect(output).to.be.false;
    });

    it('should return false for undefined', function() {
        var output = isString();

        expect(output).to.be.false;
    });
});