import chai from 'chai';
const assert = chai.assert;

//Result
const helloWorldText = main.helloWorld();
const subtractionResult = main.subtraction(4,2);
const arrayOfNumbers = main.arrayOfNumbers();

describe('Main Suite', function(){

    describe('Hello World Method - Test Cases', function(){
        it('Hello world text is as expected',function(){
            assert.equal(helloWorldText,'hello world');
        })
        it('Validate data type', function(){
            assert.typeOf(helloWorldText,'string','It failed');
        })
    })

    describe('Subraction Method - Test Cases', function(){
        it('Less than 5',function(){
            assert.isBelow(subtractionResult,5);
        })
        it('Validate data type', function(){
            assert.typeOf(subtractionResult,'number','It failed');
        })
    })

    describe('Array Method - Test Cases', function(){
        it('Array includes number 5',function(){
            assert.include(arrayOfNumbers,5);
        })
        it('Validate data type', function(){
            assert.lenghtOf(arrayOfNumbers,6,'It failed');
        })
    })
})