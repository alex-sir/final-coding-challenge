var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require("sinon-chai");
var once = require('../../src/functions/once');
var expect = chai.expect;

chai.use(sinonChai);

describe('once', function() {
    it('should return a function', function() {
        var input = sinon.fake();
        var outputFn = once(input);

        expect(outputFn).to.be.a('function');
        expect(input).to.not.have.been.called;
    });

    it('should only allow the input function to be called once', function() {
        var input = sinon.stub();
        input.onFirstCall().returns(5);
        input.onSecondCall().returns(10);
        input.returns(15);

        var outputFn = once(input);
        var firstOutput = outputFn();
        var secondOutput = outputFn();

        expect(firstOutput).to.equal(5);
        expect(secondOutput).to.equal(5);
        expect(input).to.have.been.calledOnce;
    });

    it('should pass arguments from the returned function to the original function', function() {
        var input = sinon.stub();
        input.withArgs('a').returns(5);
        input.withArgs('b').returns(10);
        input.returns(15);

        var outputFn = once(input);
        var firstOutput = outputFn('a');
        var secondOutput = outputFn('b');

        expect(firstOutput).to.equal(5);
        expect(secondOutput).to.equal(5);
        expect(input).to.have.been.calledOnce;
    });
});