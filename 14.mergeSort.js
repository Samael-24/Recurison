// function mergesort(arr) {
// if (arr.length < 2) {
//     return arr
// }
// const mid = Math.floor(arr.length / 2)
// const leftArr = arr.slice(0, mid)
// const rightArr = arr.slice(mid)
// return merge(mergesort(leftArr), mergesort(rightArr))
// }

// function merge(leftArr, rightArr) {
// const sortedArr = []
// while (leftArr.length && rightArr.length) {
//     if (leftArr[0] <= rightArr[0]) {
//       sortedArr.push(leftArr.shift())
//     } else {
//       sortedArr.push(rightArr.shift())
//     }
// }
// const resultArr = [...sortedArr, ...leftArr, ...rightArr]
// return resultArr
// }

// const arr = [8, 20, -2, 4, -6]
// console.log(mergesort(arr)) // [-6, -2, 4, 8, 20]

// Merge Sort

function merge(arr, s, mid, e) {

    let n1 = mid - s + 1;

    let n2 = e - mid;

    let left = [];

    let right = [];

    for (let i = 0; i < n1; i++) {

        left.push(arr[s + i]);

    }

    for (let i = 0; i < n2; i++) {

        right.push(arr[mid + 1 + i]);

    }

    let i = 0;

    let j = 0;

    let k = s;


    while (i < n1 && j < n2) {

        if (left[i] < right[j]) {

            arr[k] = left[i];

            i++;

        } else {

            arr[k] = right[j];

            j++;

        } k++;

    }


    while (i < n1) {

        arr[k] = left[i];

        i++;

        k++

    }


    while (i < n2) {

        arr[k] = right[i];

        j++;

        k++

    }

}


function mergeSort(arr, s, e) {

    if (arr.length < 2) {

        return arr;

    }

    if (s >= e) {

        return;

    }

    let mid = Math.floor((s + e) / 2);

    mergeSort(arr, s, mid);

    mergeSort(arr, mid + 1, e);

    merge(arr, s, mid, e);

}


let arr = [
    4,
    6,
    2,
    1,
    2,
    4,
    5,
    657734,
    512,
    41,
    4,
    34,
    2345,
    23,
    45
];

mergeSort(arr, 0, arr.length - 1);

console.log(arr);
