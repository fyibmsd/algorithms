'use strict';

import assert from 'assert';
import BinaryTree from '../../src/tree/BinaryTree';


describe('test binary search tree', () => {
    const tree = new BinaryTree;

    it('test create empty tree', () => {
        assert.equal(tree.root, null);
    });

    /**
     * A complete binary tree is a binary tree in which every level,
     * except possibly the last, is completely filled,
     * and all nodes are as far left as possible.
     *
     *              4
     *           /     \
     *        2           6
     *      /   \       /   \
     *     1     3     5     7
     *    -^--^--^--^--^--^--^-
     *     1  2  3  4  5  6  7
     * */
    it('test create complete binary tree', () => {
        tree.add(4).add(2).add(6).add(1).add(3).add(5).add(7);

        assert.equal(tree.root.value, 4);
        assert.equal(tree.root.right.right.value, 7);
    });

    it('test tree traversal', function () {
        assert.equal(tree.preorder(), '4,2,1,3,6,5,7');

        assert.equal(tree.inorder(), '1,2,3,4,5,6,7');

        assert.equal(tree.postorder(), '1,3,2,5,7,6,4');
    });

    /**
     * After invert
     *              4
     *           /     \
     *        6           2
     *      /   \       /   \
     *     7     5     3     1
     *    -^--^--^--^--^--^--^-
     *     7  6  5  4  3  2  1
     * */
    it('test invert binary tree', () => {
        tree.invert();


        assert.equal(tree.root.value, 4);
        assert.equal(tree.root.right.left.value, 3);
    });
});

