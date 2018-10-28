'use strict';

/**
 * Insertion sort
 *
 * @param array {Array}
 *
 * @return Array
 * */
export default function InsertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let tmp = array[i];
        let j = i;

        while ((j > 0) && (tmp < array[j - 1])) {
            array[j] = array[j - 1];
            j--;
        }

        array[j] = tmp;
    }

    return array;
}
