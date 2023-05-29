// Linear with Recursion
function l_R(arr,key,i){
    // Base Case
    if(i === arr.length) return -1;

    // SC
    if(arr[i]===key) return i;

    // RC
    return l_R(arr,key,i+1);
}
let arr = [1,2,3,4,59,9,76,6,12];
let key = 59;
let i =0;
console.log(l_R(arr,key,i))