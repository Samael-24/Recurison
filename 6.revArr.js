// Reverse the array
let data = [
    5,
    12,
    65,
    89,
    0,
    100,
    200
];
let temp;
function customReverse(data, start, end) {
    if (start <= end) {
        temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        customReverse(data, start + 1, end - 1);
    }
    console.warn(data)
}

customReverse(data, 0, data.length - 1);
