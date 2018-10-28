'use strict';

import assert from 'assert';
import BubbleSort from '../../src/sort/BubbleSort';
import QuickSort from '../../src/sort/QuickSort';

const unsorted = [31, 41, 59, 26, 53, 58, 97, 93, 23, 84];
const sorted = [23, 26, 31, 41, 53, 58, 59, 84, 93, 97];
const test = (f) => () => assert.deepEqual(f(unsorted.concat()), sorted);

describe('test sort algorithms', () => {

    it('test bubble sort', test(BubbleSort));

    it('test quick sort', test(QuickSort));

});
