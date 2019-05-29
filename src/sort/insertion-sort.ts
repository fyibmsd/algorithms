import { swap } from '../algorithms/util';

/**
 * Insertion Sort
 * */
export default array => {
    let { length } = array;

    for (let i = 1; i < length; i++) {
        for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
            swap(array, j, j - 1);
        }
    }

    return array;
}
