import assert from 'assert';
import yearsAgo from '../yearsAgo.js';


describe('Test my yearsAgo function' , function(){
   

    it("It should return how many years ago that year is from the current year ", function(){
         assert.equal((new Date().getFullYear()-2006), yearsAgo(2006));    
   
    });

    it("It should return how many years ago that year is from the current year ", function(){
        assert.equal((new Date().getFullYear()-2018), yearsAgo(2018));    
  
   });


    });