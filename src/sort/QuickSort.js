'use strict';

/**
 * Quick sort
 *
 * @param array {Array}
 *
 * @return Array
 * */
export default function QuickSort(array) {
    if (array.length === 0)
        return array;

    let pivot = array[0];
    let left = [], right = [];

    for (let i = 1; i < array.length; i++)
        array[i] > pivot ? right.push(array[i]) : left.push(array[i]);

    return QuickSort(left).concat([pivot], QuickSort(right));
}
