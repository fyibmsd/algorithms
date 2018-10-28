'use strict';

import assert from 'assert';
import Queue from '../../src/list/Queue';

describe('test queue', () => {

    describe('create queue', () => {
        it('create empty queue', () => {
            let queue = new Queue;

            assert.equal(queue.isEmpty(), true);
            assert.equal(queue.dequeue(), null);
        });
    });

    describe('operating queue', () => {
        let queue = new Queue;
        let elements = ['A', 'B', 'C', 'D'];

        it('enqueue should change queue length', () => {
            elements.map(item => queue.enqueue(item));

            assert.equal(queue.length, elements.length);
        });

        it('dequeue should be first in first out', () => {
            elements.map(item => assert.equal(queue.dequeue(), item));

            assert.equal(queue.isEmpty(), true);
        });
    });

});
