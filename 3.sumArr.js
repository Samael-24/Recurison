// Sum of array elements
const arr1 = [1,2,3,4,5];
const sum = (arr)=>{
    // Base Case
    if(arr.length<1) return 0;

    return arr.pop() + sum(arr); 

}
console.log(sum(arr1));