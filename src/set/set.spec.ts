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

    it('should return two sets union', () => {
        const firstSet = new Set<number>();
        const secondSet = new Set<number>();

        range(1, 3).map(v => firstSet.add(v));
        range(4, 6).map(v => secondSet.add(v));

        const unionSet = firstSet.union(secondSet);

        expect(unionSet.size()).equal(6);
        range(1, 6).map(v => expect(unionSet.has(v)).be.true);
    });

    it('should return two sets intersection', () => {
        const firstSet = new Set<number>();
        const secondSet = new Set<number>();

        range(1, 5).map(v => firstSet.add(v));
        range(3, 7).map(v => secondSet.add(v));

        const intersectionSet = firstSet.intersection(secondSet);

        expect(intersectionSet.size()).equal(3);
        range(3, 5).map(v => expect(intersectionSet.has(v)).be.true);
    });

    it('should return two sets difference', () => {
        const firstSet = new Set<number>();
        const secondSet = new Set<number>();

        range(1, 5).map(v => firstSet.add(v));
        range(3, 7).map(v => secondSet.add(v));


        expect(firstSet.difference(secondSet).values()).deep.equals(['1', '2']);
        expect(secondSet.difference(firstSet).values()).deep.equals(['6', '7']);
    });

});
