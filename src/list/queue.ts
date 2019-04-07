import LinkedList from './linked-list';

export default class Queue<T> extends LinkedList<T> {
    enqueue(value: T) {
        this.pushBack(value);
    }

    dequeue(): T {
        return this.popFront();
    }
}
