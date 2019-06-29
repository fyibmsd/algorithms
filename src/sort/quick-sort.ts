/*
 * Quick Sort
 */
export default function QuickSort(array) {
    if (array.length === 0)
        return array;

    let pivot = array.pop();
    let left = [], right = [];

    array.map(item => item < pivot ? left.push(item) : right.push(item));

    return QuickSort(left).concat([pivot], QuickSort(right));
};
