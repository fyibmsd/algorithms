import Dictionary from './dictionary';

export default class HashMap<V> {
    // use dict to resolve conflict
    protected values: Array<Dictionary<string, V>> = [];

    protected count: number = 0;

    put(key: string, value: V) {
        const pos = this.loseloseHashCode(key);

        if (this.values[pos] === undefined) {
            this.values[pos] = new Dictionary;
        }

        this.count++;
        this.values[pos].set(key, value);
    }

    get(key: string): V {
        const node = this.values[this.loseloseHashCode(key)];

        return node ? node.get(key) : null;
    }

    remove(key: string) {
        this.count--;

        return this.values[this.loseloseHashCode(key)].remove(key);
    }

    size() {
        return this.count;
    }

    private loseloseHashCode(key: string): number {
        let hash = 0;

        key.split('').map(char => hash += char.charCodeAt(0));

        return hash % 37;
    }
}
