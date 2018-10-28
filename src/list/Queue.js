'use strict';

import LinkedList from './LinkedList';

export default class Queue {
    constructor() {
        this.queue = new LinkedList;
    }

    get length() {
        return this.queue.length;
    }

    enqueue(value) {
        this.queue.pushBack(value);
    }

    dequeue() {
        return this.queue.popFront();
    }

    isEmpty() {
        return this.queue.isEmpty();
    }
}
