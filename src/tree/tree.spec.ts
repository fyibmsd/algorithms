import BinaryTree from './binary-tree';

import { expect } from 'chai';

describe('test binary tree', () => {

    it('should create empty tree', () => {
        const binaryTree = new BinaryTree;

        expect(binaryTree.root).be.null;
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
    it('should create complete binary tree', () => {
        const binaryTree = new BinaryTree;

        binaryTree.add(4).add(2).add(6).add(1).add(3).add(5).add(7);

        expect(binaryTree.root.value).equal(4);

        expect(binaryTree.root.right.right.value).equal(7);
    });

    it('should traverse tree', () => {
        const binaryTree = new BinaryTree;

        binaryTree.add(4).add(2).add(6).add(1).add(3).add(5).add(7);

        expect(binaryTree.preOrder()).deep.equal([1, 2, 3, 4, 5, 6, 7]);

        expect(binaryTree.inOrder()).deep.equal([4, 2, 1, 3, 6, 5, 7]);

        expect(binaryTree.postOrder()).deep.equal([1, 3, 2, 5, 7, 6, 4]);
    });

});
