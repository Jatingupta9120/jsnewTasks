
function sumNestedArray(arr){
    let flattenedArray=flatReduce(arr);// function flattens the nested array into single array
    return flattenedArray.reduce((acc,curr)=>acc+curr,0);
}

function flatten(arr){
    return arr.reduce(function(a,b){
        if(Array.isArray(b)){
            return a.concat(flatten(b));
        }
        return a.concat(b);
    },[]);
}

let flatReduce=(arr)=>arr.reduce((a,b)=>a.concat(Array.isArray(b)?flatReduce(b):b),[]);
console.log(sumNestedArray([1, [2, [3, 4,[5,6,4]]], 5]));