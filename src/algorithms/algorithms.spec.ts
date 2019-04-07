import { swap, range } from './util';

import { expect } from 'chai';


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
