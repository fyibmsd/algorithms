'use strict';

/**
 * Create multidimensional array
 * */
export const createMultiDim = (...args) => {
    let length = args.shift();

    if (!length) return 0;

    if (args.length === 0)
        return (new Array(length)).fill(0);

    let array = [];

    while (length--)
        array.push(createMultiDim(...args));

    return array;
};
