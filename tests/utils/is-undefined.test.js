var chai = require('chai');
var isUndefined = require('../../src/utils/is-undefined');
var expect = chai.expect;

describe('isUndefined', function() {
    it('should return true for undefined', function() {
        var output = isUndefined();

        expect(output).to.be.true;
    });

    it('should return false for null', function() {
        var input = null;
        var output = isUndefined(input);

        expect(output).to.be.false;
    });

    it('should return false for an object literal', function() {
        var input = {};
        var output = isUndefined(input);

        expect(output).to.be.false;
    });

    it('should return false for an array literal', function() {
        var input = [];
        var output = isUndefined(input);

        expect(output).to.be.false;
    });

    it('should return false for a function literal', function() {
        var input = function() {};
        var output = isUndefined(input);

        expect(output).to.be.false;
    });
});