'use strict';

import assert from 'assert';
import { Stack } from '../../src/list';

describe('test stack', () => {

    describe('create stack', () => {
        it('create empty stack', () => {
            let stack = new Stack;

            assert.strictEqual(stack.isEmpty(), true);
            assert.strictEqual(stack.pop(), null);
        });
    });

    describe('operating stack', () => {
        let stack    = new Stack;
        let elements = ['A', 'B', 'C', 'D'];

        it('push element should change stack length', () => {
            elements.map(item => stack.push(item));

            assert.strictEqual(stack.length, elements.length);

        });

        it('pop should be last in first out', () => {
            elements.reverse().map(item => assert.strictEqual(stack.pop(), item));

            assert.strictEqual(stack.isEmpty(), true);
        });
    });
});
