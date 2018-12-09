var chai = require('chai');
var keys = require('../../src/objects/keys');
var expect = chai.expect;

describe('keys', function() {
    it('should return all the enumerable keys on an object', function() {
       var input = {
           key1: true,
           key2: 2,
           key3: {
               nested1: 'JavaScript'
           }
       };
       var output = keys(input);

       expect(output).to.eql(['key1', 'key2', 'key3']);
    });

    it('should return all the enumerable keys on an object', function() {
        var input = {
            key1: true,
            key2: function() {}
        };
        var output = keys(input);

        expect(output).to.eql(['key1', 'key2']);
    });

    it('should return an empty array for an empty object', function() {
        var input = {};
        var output = keys(input);

        expect(output).to.eql([]);
    });
});