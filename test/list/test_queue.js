'use strict';

import assert from 'assert';
import { Queue } from '../../src/list';

describe('test queue', () => {

    describe('create queue', () => {
        it('create empty queue', () => {
            let queue = new Queue;

            assert.strictEqual(queue.isEmpty(), true);
            assert.strictEqual(queue.dequeue(), null);
        });
    });

    describe('operating queue', () => {
        let queue    = new Queue;
        let elements = ['A', 'B', 'C', 'D'];

        it('enqueue should change queue length', () => {
            elements.map(item => queue.enqueue(item));

            assert.strictEqual(queue.length, elements.length);
        });

        it('dequeue should be first in first out', () => {
            elements.map(item => assert.strictEqual(queue.dequeue(), item));

            assert.strictEqual(queue.isEmpty(), true);
        });
    });

});
