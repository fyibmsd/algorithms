import Dictionary from './dictionary';

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
