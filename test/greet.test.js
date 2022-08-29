import assert from 'assert';
import greet from '../greet.js';

describe ('The greet function', function()  {

    it ('should be able to greet, Samke', function() {

        assert.equal('Hello, Samke', greet('Samke'));
    });

    it ('should be able to greet, Paula', function() {

        assert.equal('Hello, Paula', greet('Paula'));
    });

});