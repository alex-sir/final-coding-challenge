var chai = require('chai');
var pick = require('../../src/objects/pick');
var expect = chai.expect;

describe('pick', function() {
    it('should return a new object with the same key/values for only the keys in the whitelist', function() {
        var input = {
            key1: true,
            key2: 2,
            key3: {
                nested1: 'JavaScript'
            }
        };
        var whitelist = ['key1', 'key3'];
        var output = pick(input, whitelist);

        expect(output).to.eql({
            key1: input.key1,
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
        var whitelist = ['key3'];
        var output = pick(input, whitelist);

        expect(output.key3).to.equal(input.key3);
    });

    it('should return a new empty object for an empty object input', function() {
        var input = {};
        var whitelist = ['key1'];
        var output = pick(input, whitelist);

        expect(output).to.eql({});
    });

    it('should return a new empty object for an empty whitelist', function() {
        var input = {
            key1: true,
            key2: 2,
            key3: {
                nested1: 'JavaScript'
            }
        };
        var whitelist = [];
        var output = pick(input, whitelist);

        expect(output).to.eql({});
    });
});