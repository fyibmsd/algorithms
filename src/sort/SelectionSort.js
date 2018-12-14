'use strict';

import {swap} from '.';

/**
 * Select Sort
 * */
export default function SelectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;

        for (let j = i; j < array.length; j++) {
            if (array[min] > array[j])
                min = j;
        }

        swap(array, i, min);
    }

    return array;
}
