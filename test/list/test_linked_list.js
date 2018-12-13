'use strict';

import assert from 'assert';
import { LinkedList } from '../../src/list';
import { listToString, reverseRecursion, reverseNonRecursion } from '../../src/algorithms';

describe('test linked list', () => {

    describe('create linked list', () => {
        it('create empty list', () => {
            let linked_list = new LinkedList;

            assert.strictEqual(linked_list.head, null);
            assert.strictEqual(linked_list.tail, null);
            assert.strictEqual(linked_list.isEmpty(), true);
        });

        it('create list with constructor', () => {
            let linked_list = new LinkedList([1, 2, 3]);

            assert.strictEqual(linked_list.head.value, 1);
            assert.strictEqual(linked_list.tail.value, 3);
            assert.strictEqual(linked_list.length, 3);
        });
    });

    describe('push elem', () => {
        let linked_list = new LinkedList;

        it('push front', () => {
            linked_list.pushFront(1);

            assert.strictEqual(linked_list.head, linked_list.tail);
            assert.strictEqual(linked_list.head.value, 1);

            linked_list.pushFront(2);

            assert.strictEqual(linked_list.head.next, linked_list.tail);
            assert.strictEqual(linked_list.head.value, 2);
        });

        it('push back', () => {
            linked_list.pushBack(3);

            assert.strictEqual(linked_list.head.next.next, linked_list.tail);
            assert.strictEqual(linked_list.tail.value, 3);
        });

    });

    describe('pop elem', () => {
        let linked_list = new LinkedList([1, 2, 3]);

        it('pop front', () => {
            assert.strictEqual(linked_list.popFront(), 1);
            assert.strictEqual(linked_list.length, 2);
        });

        it('pop back', () => {
            assert.strictEqual(linked_list.popBack(), 3);
            assert.strictEqual(linked_list.length, 1);
        });

    });

    describe('linked list reverse', () => {
        it('should be reverse recursion', () => {
            let linked_list = new LinkedList([1, 2, 3]);

            assert.strictEqual(listToString(linked_list), '123');

            reverseRecursion(linked_list);

            assert.strictEqual(listToString(linked_list), '321');
        });

        it('should be reverse non-recursion', () => {
            let linked_list = new LinkedList([1, 2, 3]);

            assert.strictEqual(listToString(linked_list), '123');

            reverseNonRecursion(linked_list);

            assert.strictEqual(listToString(linked_list), '321');
        });
    });
});
