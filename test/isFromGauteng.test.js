import assert from 'assert';
import isFromGauteng from '../isFromGauteng.js';


describe('Test my isFromGauteng function' , function(){
    it("It should return true if the registration number is for Gauteng ", function(){
        assert.equal(isFromGauteng('DR 45 LR GP'), true);

    });

        
    it("It should return false if the registration number is not for Gauteng' ", function(){
        assert.equal(isFromGauteng('CJ 123 908'), false);
    });

   


});