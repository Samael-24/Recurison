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
