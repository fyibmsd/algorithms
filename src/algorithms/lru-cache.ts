/**
 * Least recently used
 * */
import LinkedHashMap from '../map/linked-hash-map';

export default class LruCache<T> {
    private map: LinkedHashMap<T>;

    private readonly capacity: number;

    constructor(capacity: number) {
        if (capacity <= 0)
            throw new Error('capacity should >= 0');

        this.capacity = capacity;
        this.map = new LinkedHashMap<T>();
    }

    put(key: string, value: T) {
        if (this.size() === this.capacity) {
            const pair = this.map.list.head.value;

            this.map.remove(pair.key);
        }

        this.map.put(key, value);
    }

    get(key: string): T {
        const value = this.map.get(key);

        // move element to tail
        if (value) {
            this.map.remove(key);
            this.map.put(key, value);
        }

        return value;
    }

    peek(): T {
        return this.map.peek();
    }

    size() {
        return this.map.size();
    }

    full() {
        return this.size() === this.capacity;
    }
}
