import Set from './set';
import { range } from '../algorithms/util';
import { expect } from 'chai';

describe('test set', () => {
    it('should create empty set', () => {
        const set = new Set<number>();

        expect(set.size()).equal(0);
        expect(set.isEmpty()).be.true;
    });

    it('should operating values', () => {
        const set = new Set<number>();

        range(1, 5).map(v => expect(set.add(v)).be.true);

        expect(set.size()).equal(5);

        const size = set.size();

        for (let i = 1; i <= size; i++) {
            expect(set.remove(i)).be.true;

            expect(set.size()).equal(size - i);
        }

        expect(set.size()).equal(0);
        expect(set.isEmpty()).be.true;
    });

    it('should not allow duplicated values', () => {
        const set = new Set<number>();

        range(1, 5).map(set.add.bind(set));

        expect(set.add(5)).be.false;
    });

});
