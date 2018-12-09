var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require("sinon-chai");
var times = require('../../src/functions/times');
var expect = chai.expect;

chai.use(sinonChai);

describe('times', function() {
    it('should return a function', function() {
        var input = sinon.fake();
        var outputFn = times(input, 1);

        expect(outputFn).to.be.a('function');
        expect(input).to.not.have.been.called;
    });

    it('should only allow the input function to be called n times', function() {
        var input = sinon.stub();
        input.onFirstCall().returns(5);
        input.onSecondCall().returns(10);
        input.returns(15);

        var outputFn = times(input, 2);
        var firstOutput = outputFn();
        var secondOutput = outputFn();
        var thirdOutput = outputFn();

        expect(firstOutput).to.equal(5);
        expect(secondOutput).to.equal(10);
        expect(thirdOutput).to.equal(10);
        expect(input).to.have.been.calledTwice;
    });

    it('should pass arguments from the returned function to the original function', function() {
        var input = sinon.stub();
        input.withArgs('a').returns(5);
        input.withArgs('b').returns(10);
        input.returns(15);

        var outputFn = times(input, 2);
        var firstOutput = outputFn('a');
        var secondOutput = outputFn('b');
        var thirdOutput = outputFn('a');

        expect(firstOutput).to.equal(5);
        expect(secondOutput).to.equal(10);
        expect(thirdOutput).to.equal(10);
        expect(input).to.have.been.calledTwice;
    });
});