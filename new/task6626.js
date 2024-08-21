function toCalculateTotalWays(i,currSum,arr,target){
    if(i==arr.length)return currSum===target?1:0;
    const positive=toCalculateTotalWays(i+1,currSum+arr[i],arr,target);
    const negative=toCalculateTotalWays(i+1,currSum-arr[i],arr,target);
    const skip=toCalculateTotalWays(i+1,currSum,arr,target);
    return positive+negative+skip;
}
const arr=[-1, 9, 8, -3, 4];

const target=5;

const totalWays=toCalculateTotalWays(0,0,arr,target)

console.log(totalWays);