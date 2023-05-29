const palin = (data)=>{
    data = data.toLowerCase();
    return data.split(' ').reverse().join("");
}
console.log(palin("A man, a plan, a canal: Panama"))