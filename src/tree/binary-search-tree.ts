import BinaryTree from './binary-tree';

export default class BinarySearchTree extends BinaryTree {

    // binary search
    find(value) {
        let current = this.root;

        while (current) {
            if (value > current.value)
                current = current.right;
            else if (value < current.value)
                current = current.left;
            else
                return current;
        }

        return null;
    }

}
