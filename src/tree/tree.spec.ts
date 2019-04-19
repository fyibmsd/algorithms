import BinaryTree from './binary-tree';
import BinarySearchTree from './binary-search-tree';
import AVLTree from './avl-tree';
import SegmentTree from './segment-tree';
import { range } from '../algorithms/util';

import { expect } from 'chai';

describe('test binary tree', () => {

    it('should create empty tree', () => {
        const binaryTree = new BinaryTree<number>();

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
        const binaryTree = new BinaryTree<number>();

        binaryTree.add(4).add(2).add(6).add(1).add(3).add(5).add(7);

        expect(binaryTree.root.value).equal(4);

        expect(binaryTree.root.right.right.value).equal(7);
    });

    it('should traverse tree', () => {
        const binaryTree = new BinaryTree<number>();

        binaryTree.add(4).add(2).add(6).add(1).add(3).add(5).add(7);

        expect(binaryTree.preOrder()).deep.equal([1, 2, 3, 4, 5, 6, 7]);

        expect(binaryTree.inOrder()).deep.equal([4, 2, 1, 3, 6, 5, 7]);

        expect(binaryTree.postOrder()).deep.equal([1, 3, 2, 5, 7, 6, 4]);
    });

    it('should invert binary tree', function () {
        const binaryTree = new BinaryTree<number>();

        binaryTree.add(4).add(2).add(6).add(1).add(3).add(5).add(7);

        binaryTree.invert();

        expect(binaryTree.preOrder()).deep.equal([7, 6, 5, 4, 3, 2, 1]);
    });

    it('should find node use binary search', function () {
        const binarySearchTree = new BinarySearchTree<number>();

        binarySearchTree.add(4).add(2).add(6).add(1).add(3).add(5).add(7);

        expect(binarySearchTree.find(6).value).equal(6);

        expect(binarySearchTree.find(9)).be.null;
    });

    it('should alv tree auto balance', () => {
        const avlTree = new AVLTree<number>();

        expect(avlTree.getRoot()).be.null;

        range(1, 10).map(value => avlTree.insert(value));
    });

    it('should range sum by segment tree', () => {
        const array = [1, 3, 5, 7, 9, 11];
        const tree = new SegmentTree<number>(array);

        expect(tree.root.value).equal(36);
        expect(tree.root.left.value).equal(9);
        expect(tree.root.right.value).equal(27);

        tree.update(4, 6);

        expect(tree.root.value).equal(33);
        expect(tree.root.left.value).equal(9);
        expect(tree.root.right.value).equal(24);

        const result = tree.query(2, 5);

        expect(result).equal(29);
    });
});
