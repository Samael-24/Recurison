// array palindrome
let palindromeArray = (arr, start = 0, end = arr.length - 1) => {
    
    if(start >= end) return true;
    if(arr[start] === arr[end]) return palindromeArray(arr, start + 1, end - 1);
    else return false;
}
console.log(palindromeArray([1,2,2,1]));
console.log(palindromeArray([1,2,2,2]));

const sortArrayByParity = (nums)=> {
    const output = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        if (num%2 !== 0)  {
            console.log(num,"Inside the if condition")
            output.push(num);
        } else {
            console.log(num,"Inside the else condition")
            output.unshift(num);
        }
    }
    return output;
};
console.log(sortArrayByParity([3,2,1,4]))


