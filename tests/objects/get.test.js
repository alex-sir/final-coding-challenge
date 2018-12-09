var chai = require('chai');
var get = require('../../src/objects/get');
var expect = chai.expect;

describe('get', function() {
    var input = {
        key1: true,
        key2: 2,
        key3: {
            nested1: 'JavaScript',
            nested2: {
                nested11: '3 levels deep'
            }
        },
        key4: ['a', 'b', 'c'],
        key5: {
            nested1: [{
                nested11: ['z']
            }]
        }
    };

    it('should return the value stored at a path one entry deep', function() {
        var output1 = get(input, ['key1']);
        var output2 = get(input, ['key2']);

        expect(output1).to.be.true;
        expect(output2).to.equal(2);
    });

    it('should return the value stored at a path two entries deep', function() {
        var output = get(input, ['key3', 'nested1']);

        expect(output).to.equal('JavaScript');
    });

    it('should return the value stored at a path N entries deep', function() {
        var output = get(input, ['key3', 'nested2', 'nested11']);

        expect(output).to.equal('3 levels deep');
    });

    it('should return the default value stored at an invalid path one entry deep', function() {
        var output = get(input, ['keyZ'], 'test');

        expect(output).to.equal('test');
    });

    it('should return the default value stored at an invalid path two entries deep', function() {
        var output1 = get(input, ['key3', 'keyZ'], 'test1');
        var output2 = get(input, ['keyZ', 'nested1'], 'test2');

        expect(output1).to.equal('test1');
        expect(output2).to.equal('test2');
    });

    it('should return the default value stored at an invalid path N entry deep', function() {
        var output1 = get(input, ['key3', 'nested2', 'keyZ'], 'test1');
        var output2 = get(input, ['keyZ', 'nested1', 'nested11'], 'test2');

        expect(output1).to.equal('test1');
        expect(output2).to.equal('test2');
    });

    it('should return the value stored at a path through objects and arrays', function() {
        var output = get(input, ['key5', 'nested1', '0', 'nested11', '0']);

        expect(output).to.equal('z');
    });
});