import assert from 'assert';
import greet from '../greet.js';

describe ('The greet function', function() {
    it ('should be able to greet Grace', function() {
        assert.equal('Hello, Grace', greet('Grace'));
    });
    
     
        it ('should be able to greet Mpho', function() {
            assert.equal('Hello, Mpho', greet('Mpho'));
        });
});