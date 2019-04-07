interface ListNode<T> {
    value: T

    next: ListNode<T>
}

export default class LinkedList<T> {

    head: ListNode<T> = null;

    tail: ListNode<T> = null;

    length: number = 0;

    pushFront(value: T) {
        let node: ListNode<T> = {
            value,
            next: null
        };

        if (this.head === null) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
    }

    pushBack(value: T) {
        let node: ListNode<T> = {
            value,
            next: null
        };

        if (this.tail === null) {
            this.tail = this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
    }

    // T = O(1)
    popFront(): T {
        if (this.isEmpty())
            return null;

        let node = this.head;
        this.head = this.head.next;
        this.length--;

        return node.value;
    }

    // T = O(n)
    popBack(): T {
        if (this.isEmpty())
            return null;

        let next = this.head;
        let tail = this.tail;

        while (next.next && next.next.next)
            next = next.next;

        if (next === tail)
            this.tail = null;
        else
            this.tail = next;

        next.next = null;
        this.length--;

        return tail.value;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

}

