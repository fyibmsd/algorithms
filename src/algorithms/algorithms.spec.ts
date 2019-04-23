import { swap, range } from './util';

import { expect } from 'chai';
import LruCache from './lru-cache';


describe('test algorithms', () => {
    it('should swap props in object', () => {
        const object = { first: 'hello', second: 'world' };

        swap(object, 'first', 'second');

        expect(object).deep.equal({ first: 'world', second: 'hello' });
    });

    it('should create range of values', () => {
        expect(range(0, 3)).deep.equal([0, 1, 2, 3]);
        expect(range(0, 3, 3)).deep.equal([0, 3, 6, 9]);
    });


});

describe('test lru cache', () => {
    let capacity = 5;
    let lru: LruCache<string>;

    beforeEach(() => {
        lru = new LruCache<string>(capacity);

        lru.put('3', '4');
        lru.put('4', '5');
        lru.put('5', '6');
        lru.put('2', '7');
    });

    it('should refresh recently used element', () => {
        expect(lru.size()).equal(4);

        lru.put('6', '8');

        expect(lru.full()).be.true;
        expect(lru.get('3')).equal('4');
        expect(lru.peek()).equal('4');
    });

    it('should remove least used element', () => {
        lru.put('6', '8');
        lru.put('7', '10');

        expect(lru.full()).be.true;

        expect(lru.get('3')).be.null;
    });
});
