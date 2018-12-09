var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require("sinon-chai");
var defer = require('../../src/functions/defer');
var expect = chai.expect;

chai.use(sinonChai);

describe('defer', function() {
    var clock;

    before(function() {
        clock = sinon.useFakeTimers();
    });

    after(function() {
        clock.restore();
    });

    it('should call the passed function immediately after the current event stack completes', function() {
        var input = sinon.fake();

        defer(input);
        expect(input).to.not.have.been.called;

        clock.tick(1);
        expect(input).to.have.been.calledOnceWith();
    });

    it('should pass arguments from the returned function to the original function', function() {
        var input = sinon.stub();

        defer(input, 'a', 'b');
        expect(input).to.not.have.been.called;

        clock.tick(1);
        expect(input).to.have.been.calledOnceWith('a', 'b');
    });
});