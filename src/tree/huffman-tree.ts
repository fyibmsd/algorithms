interface HTNode {
    value: any

    // parent node
    parent: HTNode

    // left subtree
    left: HTNode

    // right subtree
    right: HTNode
}

export default class HuffmanTree<T> {
    private root: HTNode;

    build(array: T[]) {
        let trees: HTNode[] = [];

        array.map(value => trees.push({ value, parent: null, left: null, right: null }));

        while (trees.length > 1) {
            trees.sort((a, b) => a.value - b.value);

            let a = trees.shift();
            let b = trees.shift();

            let tree: HTNode = {
                parent: null,
                value : a.value + b.value,
                left  : a,
                right : b
            };

            trees.push(tree);
        }

        this.root = trees.pop();
    }

    getRoot() {
        return this.root;
    }

}
