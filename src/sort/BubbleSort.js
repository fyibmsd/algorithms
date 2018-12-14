'use strict';

import { swap } from '.';

/**
 * Bubble sort
 * T = O(n^2)
 *
 * @param array {Array}
 *
 * @return Array
 * */
export default function BubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }

    return array;
}
