// Power of a number
const nPower = (x,n)=>{
    if(n == 0) return 1;
   
    return x * nPower(x,n-1);
}
console.log(nPower(4,6))