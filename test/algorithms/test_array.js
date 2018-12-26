'use strict';

import assert from 'assert';
import { createMultiDim } from '../../src/algorithms';


describe('test array', () => {
    it('should create multidimensional array', () => {
        let double = [[0, 0, 0], [0, 0, 0]];
        let triple = [
            [[0, 0], [0, 0], [0, 0]],
            [[0, 0], [0, 0], [0, 0]]
        ];

        assert.deepStrictEqual(double, createMultiDim(2, 3));
        assert.deepStrictEqual(triple, createMultiDim(2, 3, 2));
    });
});
