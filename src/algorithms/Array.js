'use strict';

export const createMultiDim = (...args) => {
    let array   = [];
    let subelem = 0;
    let length  = args.shift();

    if (!length) return 0;

    if (args.length !== 0)
        subelem = createMultiDim(...args);

    while (length--)
        array.push(subelem);

    return array;
};
