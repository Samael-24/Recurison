// Reverse the string
const str = "My name is Parish";
const rev = (str)=>{
    // base case
    if(str.length === 0) return '';

    return rev(str.slice(1)) + str[0];
}
console.log(rev(str))