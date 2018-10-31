'use strict';

import LinkedList from './LinkedList';

export default class Stack {
    constructor() {
        this.stack = new LinkedList;
    }

    get length() {
        return this.stack.length;
    }

    /**
     * T = O(1)
     * */
    push(value) {
        this.stack.pushFront(value);
    }

    /**
     * T = O(1)
     * */
    pop() {
        return this.stack.popFront();
    }

    /**
     * T = O(1)
     * */
    isEmpty() {
        return this.stack.isEmpty();
    }
}
