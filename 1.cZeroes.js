
const cZeroes =(n)=>{

    if(n == 0) return 0; // Base Case

    // small calculation
    if(n%10 === 0){
        return 1 + cZeroes(Math.floor(n/10))
    }
    
    // Recursive call
    return cZeroes(Math.floor(n/10))
    
    
}
let n = 1050110
console.log(cZeroes(n))
console.log(cZeroes(100))
