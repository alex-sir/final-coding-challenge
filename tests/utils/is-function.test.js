var chai = require('chai');
var isFunction = require('../../src/utils/is-function');
var expect = chai.expect;

describe('isFunction', function() {
    it('should return true for a function literal', function() {
        var input = function() {};
        var output = isFunction(input);

        expect(output).to.be.true;
    });

    it('should return true for a function class instance', function() {
        var input = new Function();
        var output = isFunction(input);

        expect(output).to.be.true;
    });

    it('should return false for an object literal', function() {
        var input = {};
        var output = isFunction(input);

        expect(output).to.be.false;
    });

    it('should return false for an array literal', function() {
        var input = [];
        var output = isFunction(input);

        expect(output).to.be.false;
    });

    it('should return false for null', function() {
        var input = null;
        var output = isFunction(input);

        expect(output).to.be.false;
    });

    it('should return false for undefined', function() {
        var output = isFunction();

        expect(output).to.be.false;
    });
});