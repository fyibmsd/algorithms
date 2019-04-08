import Dictionary from './dictionary';
import Hashmap from './hashmap';

import { expect } from 'chai';

describe('test dictionary', () => {
    it('should index data', () => {
        const dict = new Dictionary<string, string>();

        dict.set('Gandalf', 'gandalf@gmail.com');
        dict.set('John', 'john@gmail.com');

        expect(dict.has('John')).be.true;
        expect(dict.has('Forest')).be.false;

        expect(dict.size()).equal(2);

        expect(dict.keys()).deep.equals(['Gandalf', 'John']);
        expect(dict.values()).deep.equals(['gandalf@gmail.com', 'john@gmail.com']);

        dict.keys().map(key => expect(dict.get(key)).equal(`${ key.toLowerCase() }@gmail.com`));
    });
});

describe('test hashmap', () => {
    it('should resolve conflict', () => {
        const map = new Hashmap;

        map.put('hello', 'world');
        map.put('world', 'hello');

        expect(map.get('hello')).equal('world');
        expect(map.get('world')).equal('hello');

        expect(map.get('earth')).be.undefined;
    });
});
