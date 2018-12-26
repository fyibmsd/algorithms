'use strict';

import { createMultiDim } from '..';

/**
 * Longest Common Subsequence
 * */
export const lcs = (first, second) => {
    let max   = 0;
    let index = 0;

    let lcsarr = createMultiDim(first.length + 1, second.length + 1);

    for (let i = 0; i <= first.length; i++) {
        for (let j = 0; j <= second.length; j++) {
            if (i > 0 && j > 0) {
                if (first[i - 1] === second[j - 1]) {
                    lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
                } else {
                    lcsarr[i][j] = 0;
                }
            }

            if (max < lcsarr[i][j]) {
                max   = lcsarr[i][j];
                index = i;
            }
        }
    }

    let str = '';

    if (max !== 0) {
        for (let i = index - max; i <= max; i++)
            str += second[i];
    }

    return str;
};
