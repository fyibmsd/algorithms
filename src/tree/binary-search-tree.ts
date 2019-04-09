import BinaryTree from './binary-tree';

export default class BinarySearchTree<T> extends BinaryTree<T> {

    // binary search
    find(value: T) {
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
