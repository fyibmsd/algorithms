import LinkedList from './linked-list';

export default class Stack<T> extends LinkedList<T> {
    push(value: T) {
        this.pushFront(value);
    }

    pop(): T {
        return this.popFront();
    }
}
