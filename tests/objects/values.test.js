var chai = require('chai');
var values = require('../../src/objects/values');
var expect = chai.expect;

describe('values', function() {
    it('should return values for all the enumerable keys on an object', function() {
        var input = {
            key1: true,
            key2: 2,
            key3: {
                nested1: 'JavaScript'
            }
        };
        var output = values(input);

        expect(output).to.have.lengthOf(3);
        expect(output).to.include(input.key1);
        expect(output).to.include(input.key2);
        expect(output).to.include(input.key3);
    });

    it('should return values all the enumerable keys on an object', function() {
        var input = {
            key1: true,
            key2: function() {}
        };
        var output = values(input);

        expect(output).to.have.lengthOf(2);
        expect(output).to.include(input.key1);
        expect(output).to.include(input.key2);
    });

    it('should return an empty array for an empty object', function() {
        var input = {};
        var output = values(input);

        expect(output).to.eql([]);
    });
});