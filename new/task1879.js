const obj={
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
    "keyFour": {
      "keyA": true,
      "keyB": false,
      "keyC": {
        "keyCOne": "key C one value",
        "keyCTwo": "key C two value",
        "keyCThree": 1234
      }
    }
}

function flattensNestedObject(obj){
  
    var result = {};
  
    for(let key in obj){
  
      if(typeof(obj[key]) === 'object'){
  
        var newObj = flattensNestedObject(obj[key]);
        for (let key2 in newObj) {
          result[key + '.' + key2] = newObj[key2];
        }
      }
      else{
        result[key] = obj[key];
      }
  
  
    }
    return result;
  }
  
   console.log(flattensNestedObject(obj));