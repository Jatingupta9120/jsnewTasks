// Write an “assertObjectsEqual” function from scratch which take two object and string as parameter and return string.
// The examples below represent different use cases.

// var expected = {foo: 6, bar: 5};
// var actual = {foo: 5, bar: 6}
// assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
// output => True


function assertObjectsEqual(actualObj, expectedObj, message){    
    const actualString = JSON.stringify(actualObj);

    const expectedString = JSON.stringify(expectedObj);

    if (actualString !== expectedString) {
       console.log(`FAILED Expected ${expectedString}, but got ${actualString}`);
    }else{
        console.log("Passed");
        }
    }

const actualObj = {foo:5,bar:6}; 
const expectedObj = {foo:5,bar:6};

assertObjectsEqual(actualObj, expectedObj, 'detects that two objects are equal');