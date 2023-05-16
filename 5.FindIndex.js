const arr = [12,2,3,4,12,21,10,12];
let n = arr.length -1;

const flast =(data,key,i)=>{
    // Base Case
    if(i <= 0) return 0;

    if(data[i] == key) return i;

    let num = flast(data,key,i-1);
    return num

}
console.log(flast(arr,12,n))