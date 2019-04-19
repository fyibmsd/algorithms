const { ceil } = Math;

interface Section {
    L: number
    R: number
}

interface TreeNode<T> {
    value: any
    section: Section
    left: TreeNode<T>
    right: TreeNode<T>
}

export default class SegmentTree<T> {
    public root: TreeNode<T> = null;

    constructor(array: T[]) {
        this.root = this.build(array, 0, array.length - 1);
    }

    update(index: number, value: T, current: TreeNode<T> = this.root) {

        if (index >= current.section.L && index <= current.section.R) {
            if (current.section.L == current.section.R) {
                current.value = value;
            } else {
                this.update(index, value, current.left);
                this.update(index, value, current.right);

                current.value = current.left.value + current.right.value;
            }
        }
    }

    query(start: number, end: number, current: TreeNode<T> = this.root): number {
        if (current.section.L >= start && current.section.R <= end)
            return current.value;

        let sumLeft = 0;
        let sumRight = 0;

        if (start <= current.left.section.R)
            sumLeft = this.query(start, end, current.left);

        if (end >= current.right.section.L)
            sumRight = this.query(start, end, current.right);

        return sumLeft + sumRight;
    }

    private build(array: T[], L: number, R: number): TreeNode<T> {
        let left: TreeNode<T> = null;
        let right: TreeNode<T> = null;
        let value: T;

        if (array.length === 1) {
            value = array.pop();
        } else {
            const mid = ceil(array.length / 2);

            left = this.build(array.slice(0, mid), L, L + mid - 1);
            right = this.build(array.slice(mid), L + mid, R);
            value = left.value + right.value;
        }

        const section = { L, R };

        return { value, section, left, right } as TreeNode<T>;
    }
}
