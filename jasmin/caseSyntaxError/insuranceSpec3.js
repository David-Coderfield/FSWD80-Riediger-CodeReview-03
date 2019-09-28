/*            
* This is the file which will call
* our javascript file that need to be tested.
* Each describe block is equivalent to one test case    
*    
*/   

// describe your code
describe("Insurance", function(){

       // what it should do
       it("should Return a string",function(){
               //expect something
               expect(calculateInsurance()).toEqual('Dave, your insurance costs 6716.67 €');
       });

});


/*
Note how describe - it() argument reads like a sentence.
*/