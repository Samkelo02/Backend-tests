import assert from 'assert';
import enoughAirtime from '../enoughAirtime.js';


describe('Unit test for my enoughAirtime function' , function(){
    it("It should return R16.98 when called with R50 airtime for 'call,call,call,data,sms,sms,call,data'" , function(){
        assert.equal('R16.98', enoughAirtime('call,call,call,data,sms,sms,call,data', 50));  
    });

    it("It should return R0.00 when called with R20 airtime for 'data,sms,data,sms'" , function(){
        assert.equal('R0.00', enoughAirtime('data,sms,data,sms', 20));  
    }); 

    it("It should return R0.00 when called with R36 airtime for 'data,data,data'" , function(){
        assert.equal('R0.00', enoughAirtime('data,data,data', 36 ));  
    });
 
 });
