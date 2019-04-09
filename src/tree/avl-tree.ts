import BinarySearchTree from './binary-search-tree';

interface AVLTreeNode<T> {
    value: T

    // left subtree
    left: AVLTreeNode<T>

    // right subtree
    right: AVLTreeNode<T>
}

export default class AVLTree<T> extends BinarySearchTree<T> {

    root: AVLTreeNode<T> = null;

    insert(value: T) {
        this.root = this.insertNode(this.root, value);
    }

    private insertNode(node: AVLTreeNode<T>, value: T): AVLTreeNode<T> {
        if (node === null) {
            node = { value, left: null, right: null };
        } else if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        }

        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

        if (heightDifference > 1) {

            if (value < node.left.value)
                node = this.rotationLL(node);
            else
                node = this.rotationLR(node);

        } else if (heightDifference < -1) {

            if (value > node.right.value)
                node = this.rotationRR(node);
            else
                node = this.rotationRL(node);

        }


        return node;
    }

    /**
     * Right right case: rotate left
     *
     *     a                              b
     *    / \                            / \
     *   c   b   -> rotationRR(a) ->    a   e
     *      / \                        / \
     *     d   e                      c   d
     */
    private rotationRR(node: AVLTreeNode<T>) {
        const tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;

        return tmp;
    }

    /**
     * Left left case: rotate right
     *
     *       b                           a
     *      / \                         / \
     *     a   e -> rotationLL(b) ->   c   b
     *    / \                             / \
     *   c   d                           d   e
     */
    private rotationLL(node: AVLTreeNode<T>) {
        const tmp = node.left;
        node.left = tmp.left;
        tmp.right = node;

        return tmp;
    }


    /**
     * Left right case: rotate left then right
     */
    private rotationLR(node: AVLTreeNode<T>) {
        node.left = this.rotationRR(node.left);

        return this.rotationLL(node);
    }

    /**
     * Right left case: rotate right then left
     */
    private rotationRL(node: AVLTreeNode<T>) {
        node.right = this.rotationLL(node.right);

        return this.rotationRR(node);
    }

    private getNodeHeight(node: AVLTreeNode<T>) {
        if (node === null)
            return -1;

        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }
}
