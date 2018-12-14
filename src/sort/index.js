'use strict';

import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import QuickSort from "./QuickSort";
import SelectionSort from "./SelectionSort";

export const swap = (array, x, y) => {
    let tmp  = array[x];
    array[x] = array[y];
    array[y] = tmp;
};

export {
    BubbleSort,
    InsertionSort,
    QuickSort,
    SelectionSort
};
