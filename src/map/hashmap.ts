import Dictionary from './dictionary';

export default class Hashmap<V> {
    // use dict to resolve conflict
    private values: Array<Dictionary<string, V>> = [];

    put(key: string, value: V) {
        const pos = this.loseloseHashCode(key);

        if (this.values[pos] === undefined) {
            this.values[pos] = new Dictionary;
        }

        this.values[pos].set(key, value);
    }

    get(key: string): V {
        return this.values[this.loseloseHashCode(key)].get(key);
    }

    remove(key: string) {
        return this.values[this.loseloseHashCode(key)].remove(key);
    }

    private loseloseHashCode(key: string): number {
        let hash = 0;

        key.split('').map(char => hash += char.charCodeAt(0));

        return hash % 37;
    }
}
