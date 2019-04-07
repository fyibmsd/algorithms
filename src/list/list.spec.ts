import LinkedList from './linked-list';
import DoubleLinkedList from './double-linked-list';
import Queue from './queue';
import Stack from './stack';

import { expect } from 'chai';

describe('test linked list', () => {
    it('should create empty list', () => {
        const list = new LinkedList<number>();

        expect(list.length).equal(0);
        expect(list.head).equal(list.tail).be.null;
    });

    it('should operating elements', () => {
        const list = new LinkedList<number>();

        list.pushFront(1);

        expect(list.length).equal(1);
        expect(list.head).equal(list.tail);

        list.pushFront(2);

        expect(list.head.value).equal(2);
        expect(list.head.next).equal(list.tail);

        list.pushBack(3);

        expect(list.tail.value).equal(3);

        expect(list.popFront()).equal(2);
        expect(list.length).equal(2);

        expect(list.popBack()).equal(3);
        expect(list.length).equal(1);

        expect(list.popBack()).equal(1);
        expect(list.isEmpty()).be.true;

        expect(list.popBack()).be.null;
    });
});

describe('test double linked list', () => {
    it('should create empty list', () => {
        const list = new DoubleLinkedList<number>();

        expect(list.length).equal(0);
        expect(list.head).equal(list.tail).be.null;
    });

    it('should operating elements', () => {
        // 2 <-> 1 <-> 3
        const list = new DoubleLinkedList<number>();

        list.pushFront(1);

        expect(list.length).equal(1);
        expect(list.head).equal(list.tail);

        list.pushFront(2);

        expect(list.head.value).equal(2);
        expect(list.head.next).equal(list.tail);

        list.pushBack(3);

        expect(list.tail.value).equal(3);

        expect(list.popFront()).equal(2);
        expect(list.length).equal(2);

        expect(list.popBack()).equal(3);
        expect(list.length).equal(1);

        expect(list.popBack()).equal(1);
        expect(list.isEmpty()).be.true;

        expect(list.popBack()).be.null;
    });

    it('should insert node', () => {
        // 2 <-> 1 <-> 3
        const list = new DoubleLinkedList<number>();

        [2, 1, 3].map(v => list.pushBack(v));

        // 2 <-> 1 <-> 4 <-> 3
        list.insertAt(list.head.next, 4);

        expect(list.length).equal(4);
        expect(list.tail.prev.value).equal(4);
    });

    it('should remove node', () => {
        // 2 <-> 1 <-> 3
        const list = new DoubleLinkedList<number>();

        [2, 1, 3].map(v => list.pushBack(v));

        // 2 <-> 3
        list.removeAt(list.head.next);

        expect(list.length).equal(2);
        expect(list.head.next.value).equal(3);

    });

});

describe('test queue', () => {
    it('should first in first out', () => {
        const queue = new Queue<number>();

        expect(queue.size()).equal(0);
        expect(queue.isEmpty()).be.true;

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.size()).equal(3);

        expect(queue.dequeue()).equal(1);
        expect(queue.dequeue()).equal(2);

        expect(queue.peek()).equal(3);

        expect(queue.dequeue()).equal(3);
        expect(queue.dequeue()).be.null;
    });
});

describe('test stack', () => {
    it('should first in last out', () => {
        const stack = new Stack<number>();

        expect(stack.size()).equal(0);
        expect(stack.isEmpty()).be.true;

        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.size()).equal(3);

        expect(stack.pop()).equal(3);
        expect(stack.pop()).equal(2);

        expect(stack.peek()).equal(1);

        expect(stack.pop()).equal(1);
        expect(stack.pop()).be.null;
    });
});
