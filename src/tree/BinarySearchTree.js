'use strict';

import BinaryTree from "./BinaryTree";

export default class BinarySearchTree extends BinaryTree {
    /**
     * 二叉树搜索
     *
     * */
    contains(value) {
        let current = this.root;

        while (current) {
            if (value > current.value)
                current = current.right;
            else if (value < current.value)
                current = current.left;
            else
                return true;
        }

        return false;
    }
}