import BubbleSort from './bubble-sort';
import SelectionSort from './selection-sort';
import InsertionSort from './insertion-sort';
import MergeSort from './merge-sort';

import { expect } from 'chai';


const unsorted = [31, 41, 59, 26, 53, 58, 97, 93, 23, 84];
const sorted = [23, 26, 31, 41, 53, 58, 59, 84, 93, 97];

const test = (m, f) => it(m, () => expect(f(unsorted.concat())).deep.equals(sorted));

describe('test sort', () => {

    test('test bubble sort', BubbleSort);

    test('test selection sort', SelectionSort);

    test('test insertion sort', InsertionSort);

    test('test merge sort', MergeSort);

});
