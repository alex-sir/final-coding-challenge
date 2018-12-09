var chai = require('chai');
var omit = require('../../src/objects/omit');
var expect = chai.expect;

describe('omit', function() {
    it('should return a new object with the same key/values for all keys not on the blacklist', function() {
        var input = {
            key1: true,
            key2: 2,
            key3: {
                nested1: 'JavaScript'
            }
        };
        var blacklist = ['key1', 'key2'];
        var output = omit(input, blacklist);

        expect(output).to.eql({
            key3: input.key3
        });
    });

    it('should return a new object with shallow copies of the values', function() {
        var input = {
            key1: true,
            key2: 2,
            key3: {
                nested1: 'JavaScript'
            }
        };
        var blacklist = ['key1', 'key2'];
        var output = omit(input, blacklist);

        expect(output.key3).to.equal(input.key3);
    });

    it('should return a new empty object for an empty object input', function() {
        var input = {};
        var blacklist = ['key1'];
        var output = omit(input, blacklist);

        expect(output).to.eql({});
    });

    it('should return a new object will all keys for an empty blacklist', function() {
        var input = {
            key1: true,
            key2: 2,
            key3: {
                nested1: 'JavaScript'
            }
        };
        var blacklist = [];
        var output = omit(input, blacklist);

        expect(output).to.eql(input);
    });
});