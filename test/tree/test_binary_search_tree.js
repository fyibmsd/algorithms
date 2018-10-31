'use strict';

import assert from 'assert';
import BinarySearchTree from '../../src/tree/BinarySearchTree';


describe('test binary search tree', () => {
    const tree = new BinarySearchTree;

    /**
     *              4
     *           /     \
     *        2           6
     *      /   \       /   \
     *     1     3     5     7
     *    -^--^--^--^--^--^--^-
     *     1  2  3  4  5  6  7
     * */
    it('test binary search', () => {
        tree.add(4).add(2).add(6).add(1).add(3).add(5).add(7);

        assert.equal(tree.contains(7), true);
        assert.equal(tree.contains(8), false);
    });
});

