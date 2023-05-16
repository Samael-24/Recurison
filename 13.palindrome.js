// array palindrome
let palindromeArray = (arr, start = 0, end = arr.length - 1) => {
    
    if(start >= end) return true;
    if(arr[start] === arr[end]) return palindromeArray(arr, start + 1, end - 1);
    else return false;
}
console.log(palindromeArray([1,2,2,1]));
console.log(palindromeArray([1,2,2,2]));


