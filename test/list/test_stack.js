'use strict';

import assert from 'assert';
import Stack from '../../src/list/Stack';

describe('test stack', () => {

    describe('create stack', () => {
        it('create empty stack', () => {
            let stack = new Stack;

            assert.equal(stack.isEmpty(), true);
            assert.equal(stack.pop(), null);
        });
    });

    describe('operating stack', () => {
        let stack = new Stack;
        let elements = ['A', 'B', 'C', 'D'];

        it('push element should change stack length', () => {
            elements.map(item => stack.push(item));

            assert.equal(stack.length, elements.length);

        });

        it('pop should be last in first out', () => {
            elements.reverse().map(item => assert.equal(stack.pop(), item));

            assert.equal(stack.isEmpty(), true);
        });
    });
});
