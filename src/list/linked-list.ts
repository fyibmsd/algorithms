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

    popFront() {
        
    }

    popBack() {

    }

}

