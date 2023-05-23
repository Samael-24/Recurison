function findMinAndMax(arr, start, end) {
    if (start == end) {
        return [
            arr[start], arr[start]
        ];
    }
    if (end - start == 1) {
        return [
            Math.min(arr[start], arr[end]),
            Math.max(arr[start], arr[end])
        ];
    }
    let mid = Math.floor((start + end) / 2);
    let left = findMinAndMax(arr, start, mid);
    let right = findMinAndMax(arr, mid + 1, end);
    return [
        Math.min(left[0], right[0]),
        Math.max(left[1], right[1])
    ];
}

var arr = [
    11,
    21,
    23,
    14,
    51,
    99,
];
console.log( findMinAndMax(arr, 0, arr.length - 1));
