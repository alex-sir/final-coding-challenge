var chai = require('chai');
var isArray = require('../../src/utils/is-array');
var expect = chai.expect;

describe('isArray', function() {
    it('should return true for an array literal "[]"', function() {
        var input = [];
        var output = isArray(input);

        expect(output).to.be.true;
    });

    it('should return true for an array class instance', function() {
        var input = new Array();
        var output = isArray(input);

        expect(output).to.be.true;
    });

    it('should return false for an object with a length property', function() {
        var input = { length: 1 };
        var output = isArray(input);

        expect(output).to.be.false;
    });

    it('should return false for an object', function() {
        var input = {};
        var output = isArray(input);

        expect(output).to.be.false;
    });

    it('should return false for a string', function() {
        var input = '';
        var output = isArray(input);

        expect(output).to.be.false;
    });

    it('should return false for null', function() {
        var input = null;
        var output = isArray(input);

        expect(output).to.be.false;
    });

    it('should return false for undefined', function() {
        var output = isArray();

        expect(output).to.be.false;
    });
});