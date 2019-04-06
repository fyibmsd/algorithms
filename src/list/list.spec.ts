import LinkedList from './linked-list';

import { expect } from 'chai';

describe('test linked list', () => {
    it('should create empty list', () => {
        const list = new LinkedList<number>();

        expect(list.length).equal(0);
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
    });
});
