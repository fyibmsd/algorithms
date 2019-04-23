import Dictionary from './dictionary';
import HashMap from './hash-map';
import LinkedHashMap from './linked-hash-map';

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
        const map = new HashMap;

        map.put('hello', 'world');
        map.put('world', 'hello');

        expect(map.get('hello')).equal('world');
        expect(map.get('world')).equal('hello');

        // hash(hello) == hash(earth)
        expect(map.get('earth')).be.undefined;
    });
});

describe('test linked hashmap', () => {
    it('should be orderd hashmap', () => {
        const map = new LinkedHashMap;

        const values = { 'apple': 'apple.com', 'ibm': 'ibm.com', 'google': 'google.com' };
        const keys = Object.keys(values);

        keys.map(key => map.put(key, values[key]));

        const iterator = map.iterator();

        let offset = 0;

        while (iterator.hasNext()) {
            expect(iterator.next()).equal(map.get(keys[offset++]));
        }

        expect(map.get('ibm')).equal('ibm.com');

        map.remove('ibm');

        expect(map.get('ibm')).be.null;
        expect(map.size()).equal(2);
    });
});
