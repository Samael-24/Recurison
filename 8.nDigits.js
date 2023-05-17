// No of Digits;
let num = 123456;
const nDigits = (n)=>{
    if(n<10) return 1;
    
    // Recursive call
    return 1 + nDigits(n/10)
}
console.log(nDigits(num))