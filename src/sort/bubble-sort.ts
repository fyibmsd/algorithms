import { swap } from '../algorithms/util';

/**
 * Bubble Sort
 * */

export default array => {
    let length = array.length;

    for (let i = 0; i < length; i++)
        for (let j = 0; j < length - 1 - i; j++)
            if (array[j] > array[j + 1])
                swap(array, j, j + 1);

    return array;
};
