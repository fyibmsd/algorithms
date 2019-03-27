import { swap } from '../algorithms/util';

/**
 * Selection Sort
 * */
export default array => {
    let { length } = array;

    for (let i = 0; i < length; i++) {
        let min = i;

        for (let j = i + 1; j < length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }

        swap(array, i, min);
    }

    return array;
}
