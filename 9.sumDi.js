// Sum of Digits
let num = 12345;
const dSum = (n) =>{
    if(n == 0) return 0;
    return dSum(Math.floor(n/10)) + (n%10);
}
console.log(dSum(num))
