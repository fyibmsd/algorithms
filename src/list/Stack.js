'use strict';

import LinkedList from './LinkedList';

export default class Stack {
    constructor() {
        this.stack = new LinkedList;
    }

    get length() {
        return this.stack.length;
    }

    push(value) {
        this.stack.pushFront(value);
    }

    pop() {
        return this.stack.popFront();
    }

    isEmpty() {
        return this.stack.isEmpty();
    }
}
