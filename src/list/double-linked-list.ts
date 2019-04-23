import LinkedList from './linked-list';

export interface DListNode<T> {
    value: T

    prev: DListNode<T>

    next: DListNode<T>
}

export default class DoubleLinkedList<T> extends LinkedList<T> {
    head: DListNode<T> = null;

    tail: DListNode<T> = null;

    length: number = 0;

    // T = O(1)
    pushFront(value: T) {
        let node: DListNode<T> = {
            value,
            prev: null,
            next: null
        };

        if (this.head === null) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.length++;
    }

    // T = O(1)
    pushBack(value: T) {
        let node: DListNode<T> = {
            value,
            prev: null,
            next: null
        };

        if (this.tail === null) {
            this.tail = this.head = node;
        } else {
            node.prev = this.tail;
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
        this.head.prev = null;

        this.length--;

        return node.value;
    }

    // T = O(1)
    popBack(): T {
        if (this.isEmpty())
            return null;

        let node = this.tail;

        this.tail = this.tail.prev;

        if (this.tail === null)
            this.head = null;

        this.length--;

        return node.value;
    }

    insertAt(pos: DListNode<T>, value: T) {
        let node: DListNode<T> = {
            value,
            prev: null,
            next: null
        };

        if (pos.next === null) {
            node.prev = pos;
            pos.next = node;
        } else {
            node.next = pos.next;
            pos.next.prev = node;
            pos.next = node;
        }

        this.length++;
    }

    removeAt(pos: DListNode<T>): T {
        if (this.isEmpty()) return null;

        if (pos.prev === null) return this.popFront();

        if (pos.next === null) return this.popBack();

        pos.prev.next = pos.next;
        pos.next.prev = pos.prev;

        pos.next = null;
        pos.prev = null;
        this.length--;

        return pos.value;
    }
}
