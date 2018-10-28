'use strict';

class DListNode {
    constructor(value) {
        this.value = value;

        this.prev = null;

        this.next = null;
    }
}

export default class DoubleLinkedList {
    constructor(args) {
        this.head = null;

        this.tail = null;

        this.length = 0;

        if (args && args.length > 0)
            args.map(value => this.pushBack(value));
    }

    pushFront(value) {
        let node = new DListNode(value);

        if (this.length === 0) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.length++;
    }

    pushBack(value) {
        let node = new DListNode(value);

        if (this.length === 0) {
            this.tail = this.head = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
    }

    popFront() {
        if (this.length === 0)
            return null;

        let node = this.head;
        this.head = node.next;
        this.head.prev = null;
        this.length--;

        return node.value;
    }

    popBack() {
        if (this.length === 0)
            return null;

        let node = this.tail;
        this.tail = node.prev;
        this.tail.next = null;
        this.length--;

        return node.value;
    }

    removeAt(node) {
        if (node.prev !== null)
            node.prev.next = node.next;
        else
            this.head = node.next;

        if (node.next !== null)
            node.next.prev = node.prev;
        else
            this.tail = node.prev;

        this.length--;

        return node.value;
    }

    isEmpty() {
        return this.length === 0;
    }
}
