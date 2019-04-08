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

    union(otherSet: Set<T>): Set<T> {
        const unionSet = new Set<T>();

        this.values().map(key => unionSet.add(this.items[key]));

        otherSet.values().map(key => unionSet.add(otherSet.items[key]));

        return unionSet;
    }

    intersection(otherSet: Set<T>): Set<T> {
        const intersectionSet = new Set<T>();

        this.values().map(key =>
            otherSet.has(this.items[key]) && intersectionSet.add(this.items[key])
        );

        return intersectionSet;
    }

    difference(otherSet: Set<T>): Set<T> {
        const differenceSet = new Set<T>();

        this.values().map(key =>
            otherSet.has(this.items[key]) === false && differenceSet.add(this.items[key])
        );

        return differenceSet;
    }
}
