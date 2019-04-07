export default class Set<T> {
    private items: any = {};

    add(value: T) {
        if (!this.has(value)) {
            this.items[value] = value;
            return true;
        }

        return false;
    }

    remove(value: T) {
        if (this.has(value)) {
            delete this.items[value];
            return true;
        }

        return false;
    }

    has(value: T): boolean {
        return this.items[value] !== undefined;
    }

    values() {
        return Object.keys(this.items);
    }

    size() {
        return this.values().length;
    }

    isEmpty() {
        return this.size() === 0;
    }
}
