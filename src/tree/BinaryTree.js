'use strict';

class TreeNode {
    constructor(value) {
        this.value = value;

        this.left = null;

        this.right = null;
    }
}

export default class BinaryTree {
    constructor() {
        this.root = null;
    }

    /**
     * T = O(logn)
     * */
    add(value) {
        let node = new TreeNode(value);

        if (this.root === null) {
            this.root = node;

            return this;
        }

        let current = this.root;

        while (true) {
            if (value > current.value) {
                if (current.right === null) {
                    current.right = node;
                    break;
                }

                current = current.right;
            } else if (value < current.value) {
                if (current.left === null) {
                    current.left = node;
                    break;
                }

                current = current.left;
            } else {
                break;
            }
        }

        return this;
    }

    invert(node) {
        if (node === undefined)
            node = this.root;

        if (node === null)
            return null;

        let tmp = node.left;
        node.left = node.right;
        node.right = tmp;

        this.invert(node.left);
        this.invert(node.right);

        return node;
    }

    preorder() {
        let result = [];
        let order = node => {
            if (node) result.push(node.value);

            if (node.left) order(node.left);

            if (node.right) order(node.right);
        };

        order(this.root);

        return result.join(',');
    }

    inorder() {
        let result = [];
        let order = node => {
            if (node.left) order(node.left);

            if (node) result.push(node.value);

            if (node.right) order(node.right);
        };

        order(this.root);

        return result.join(',');
    }

    postorder() {
        let result = [];
        let order = node => {
            if (node.left) order(node.left);

            if (node.right) order(node.right);

            if (node) result.push(node.value);
        };

        order(this.root);

        return result.join(',');
    }
}
