const { floor } = Math;

/**
 * Merge Sort
 * */
export default function MergeSort(array) {
    let { length } = array;

    if (length < 2)
        return array;

    let middle = floor(length / 2),
        left   = array.slice(0, middle),
        right  = array.slice(middle);

    return ((left, right) => {
        let result = [];

        while (left.length && right.length)
            left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift());

        while (left.length)
            result.push(left.shift());

        while (right.length)
            result.push(right.shift());

        return result;
    })(MergeSort(left), MergeSort(right));
};
