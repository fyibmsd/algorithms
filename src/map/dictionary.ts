export default class Dictionary<K, V> {
    private items: any = {};

    set(key: K, value: V) {
        this.items[key] = value;
    }

    get(key: K): V {
        return this.items[key];
    }

    keys() {
        return Object.keys(this.items);
    }

    values() {
        return this.keys().map(key => this.items[key]);
    }

    has(key: K): boolean {
        return this.items[key] !== undefined;
    }

    size() {
        return this.keys().length;
    }
}
