// Power of a number
const num = 2;
const power = 4;
const nPower = (x,n)=>{
    if(n == 0) return 1;
   
    return x * nPower(x,n-1);
}
console.log(nPower(num,power))