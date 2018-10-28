'use strict';

import assert from 'assert';
import LinkedList from '../../src/list/LinkedList';

describe('test linked list', () => {

    describe('create linked list', () => {
        it('create empty list', () => {
            let linked_list = new LinkedList;

            assert.equal(linked_list.head, null);
            assert.equal(linked_list.tail, null);
            assert.equal(linked_list.isEmpty(), true);
        });

        it('create list with constructor', () => {
            let linked_list = new LinkedList([1, 2, 3]);

            assert.equal(linked_list.head.value, 1);
            assert.equal(linked_list.tail.value, 3);
            assert.equal(linked_list.length, 3);
        });
    });

    describe('push elem', () => {
        let linked_list = new LinkedList;

        it('push front', () => {
            linked_list.pushFront(1);

            assert.equal(linked_list.head, linked_list.tail);
            assert.equal(linked_list.head.value, 1);

            linked_list.pushFront(2);

            assert.equal(linked_list.head.next, linked_list.tail);
            assert.equal(linked_list.head.value, 2);
        });

        it('push back', () => {
            linked_list.pushBack(3);

            assert.equal(linked_list.head.next.next, linked_list.tail);
            assert.equal(linked_list.tail.value, 3);
        });

    });

    describe('pop elem', () => {
        let linked_list = new LinkedList([1, 2, 3]);

        it('pop front', () => {
            assert.equal(linked_list.popFront(), 1);
            assert.equal(linked_list.length, 2);
        });

        it('pop back', () => {
            assert.equal(linked_list.popBack(), 3);
            assert.equal(linked_list.length, 1);
        });

    });
});
