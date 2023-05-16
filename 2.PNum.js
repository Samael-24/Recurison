// Print Numbers
const printNum = (n) =>{
    // base Case
    if(n === 0){
        return
    }
    printNum(n-1);
    console.log(n);
    return `Numbers are Printed`
}
console.log(printNum(5))