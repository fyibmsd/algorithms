interface TreeNode {
    value: any

    // left subtree
    left: TreeNode

    // right subtree
    right: TreeNode
}

export default class BinaryTree<T> {

    root: TreeNode = null;

    // build binary tree
    add(value: T) {
        let node: TreeNode = {
            value,
            left : null,
            right: null
        };

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

    // pre-order traversal
    preOrder() {
        let result = [];

        let order = node => {
            if (node.left) order(node.left);

            if (node) result.push(node.value);

            if (node.right) order(node.right);
        };

        order(this.root);

        return result;
    }

    // in-order traversal
    inOrder() {
        let result = [];

        let order = node => {
            if (node) result.push(node.value);

            if (node.left) order(node.left);

            if (node.right) order(node.right);
        };

        order(this.root);

        return result;
    }

    // post-order traversal
    postOrder() {
        let result = [];

        let order = node => {
            if (node.left) order(node.left);

            if (node.right) order(node.right);

            if (node) result.push(node.value);
        };

        order(this.root);

        return result;
    }

    getRoot() {
        return this.root;
    }

    // invert binary tree
    invert(node = undefined) {
        if (node === undefined)
            node = this.root;

        if (node === null)
            return null;

        [node.left, node.right] = [node.right, node.left];

        this.invert(node.left);
        this.invert(node.right);

        return node;
    }
}
