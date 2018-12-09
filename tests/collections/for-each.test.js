var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require("sinon-chai");
var forEach = require('../../src/collections/for-each');
var expect = chai.expect;

chai.use(sinonChai);

describe('forEach', function() {
    it('should invoke the callback once for every element in the array', function() {
        var input = [1, 2, 3];
        var cb = sinon.fake();

        forEach(input, cb);

        expect(cb).to.have.callCount(3);
        expect(cb).to.have.been.calledWith(input[0], 0, input);
        expect(cb).to.have.been.calledWith(input[1], 1, input);
        expect(cb).to.have.been.calledWith(input[2], 2, input);
    });

    it('should invoke the callback once for every character in the string', function() {
        var input = 'abc';
        var cb = sinon.fake();

        forEach(input, cb);

        expect(cb).to.have.callCount(3);
        expect(cb).to.have.been.calledWith(input[0], 0, input);
        expect(cb).to.have.been.calledWith(input[1], 1, input);
        expect(cb).to.have.been.calledWith(input[2], 2, input);
    });

    it('should invoke the callback once for every key in the object', function() {
        var input = {
            key1: true,
            key2: 2,
            key3: 'JavaScript'
        };
        var cb = sinon.fake();

        forEach(input, cb);

        expect(cb).to.have.callCount(3);
        expect(cb).to.have.been.calledWith(input.key1, 'key1', input);
        expect(cb).to.have.been.calledWith(input.key2, 'key2', input);
        expect(cb).to.have.been.calledWith(input.key3, 'key3', input);
    });

    it('should throw an exception when the collection is any other data type', function() {
        var input = 5;
        var cb = sinon.fake();

        expect(function() {
            forEach(input, cb);
        }).to.throw();

        expect(cb).to.not.have.been.called;
    });

    it('should throw an exception when the collection is null', function() {
        var input = null;
        var cb = sinon.fake();

        expect(function() {
            forEach(input, cb);
        }).to.throw();

        expect(cb).to.not.have.been.called;
    });
});