'use strict';

import assert from 'assert';
import { DoubleLinkedList } from '../../src/list';

describe('test double linked list', () => {
    describe('create double linked list', () => {
        it('create empty list', () => {
            let dl_list = new DoubleLinkedList;

            assert.strictEqual(dl_list.isEmpty(), true);
            assert.strictEqual(dl_list.head, null);
            assert.strictEqual(dl_list.tail, null);
        });
    });

    describe('operating double linked list', () => {
        describe('push elem', () => {
            let dl_list = new DoubleLinkedList;

            it('push front', () => {
                // 2 <-> 1
                dl_list.pushFront(1);
                dl_list.pushFront(2);

                assert.strictEqual(dl_list.length, 2);
                assert.strictEqual(dl_list.head.value, 2);
                assert.strictEqual(dl_list.head.next, dl_list.tail);
                assert.strictEqual(dl_list.head, dl_list.tail.prev);
            });

            it('push back', () => {
                // 2 <-> 1 <-> 3
                dl_list.pushBack(3);

                assert.strictEqual(dl_list.length, 3);
                assert.strictEqual(dl_list.tail.value, 3);
                assert.strictEqual(dl_list.tail.prev, dl_list.head.next);
            });
        });

        describe('pop elem', () => {
            // 2 <-> 1 <-> 3
            let dl_list = new DoubleLinkedList([2, 1, 3]);

            it('pop front', () => {
                assert.strictEqual(dl_list.popFront(), 2);
                assert.strictEqual(dl_list.head.value, 1);
                assert.strictEqual(dl_list.length, 2);
            });

            it('pop back', () => {
                assert.strictEqual(dl_list.popBack(), 3);
                assert.strictEqual(dl_list.tail.value, 1);
                assert.strictEqual(dl_list.length, 1);
            });
        });

        describe('remove at', () => {
            // 2 <-> 1 <-> 3
            let dl_list = new DoubleLinkedList([2, 1, 3]);

            it('remove specified element', () => {
                // remove second node
                assert.strictEqual(dl_list.removeAt(dl_list.head.next), 1);

                assert.strictEqual(dl_list.head.next.value, 3);
                assert.strictEqual(dl_list.tail.prev.value, 2);
                assert.strictEqual(dl_list.length, 2);
            });

        });

    });
});
