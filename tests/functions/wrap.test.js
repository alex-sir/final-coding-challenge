var chai = require('chai');
var wrap = require('../../src/functions/wrap');
var expect = chai.expect;

describe('wrap', function() {
    it('should return a function', function() {
        let input = 5;
        let outputFn = wrap(input);

        expect(outputFn).to.be.a('function');
    });

    it('should return the original value when the returned function is invoked', function() {
        let input = 5;
        let outputFn = wrap(input);
        let output = outputFn();

        expect(output).to.equal(input);
    });

    it('should return the original value when the returned function is invoked', function() {
        let input = 'JavaScript';
        let outputFn = wrap(input);
        let output = outputFn();

        expect(output).to.equal(input);
    });

    it('should return the original value when the returned function is invoked', function() {
        let input = {
            key1: true,
            key2: 2,
            key3: ['a', 'b', 'c']
        };
        let outputFn = wrap(input);
        let output = outputFn();

        expect(output).to.equal(input);
    });
});