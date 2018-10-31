'use strict';

import LinkedList from './LinkedList';

export default class Queue {
    constructor() {
        this.queue = new LinkedList;
    }

    get length() {
        return this.queue.length;
    }

    /**
     * T = O(1)
     * */
    enqueue(value) {
        this.queue.pushBack(value);
    }

    /**
     * T = O(1)
     * */
    dequeue() {
        return this.queue.popFront();
    }

    /**
     * T = O(1)
     * */
    isEmpty() {
        return this.queue.isEmpty();
    }
}
