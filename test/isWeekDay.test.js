import assert from 'assert';
import isWeekDay from '../isWeekDay.js';

describe('Testing isWeekDay function' , function(){
    it('Should find out if the parameter passed in is a day of the week ' , function(){
        assert.equal(isWeekDay('Sunday'), false);

        
    });
    
});