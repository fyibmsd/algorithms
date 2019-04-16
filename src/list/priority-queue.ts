interface Element<T> {
    element: T
    weight: number
}

export default class PriorityQueue<T> {
    private items: Element<T>[] = [];

    enqueue(element: T, weight: number) {
        let added = false;
        let member: Element<T> = { element, weight };

        this.items.map((value, index) => {

            if (added === false && weight < value.weight) {
                this.items.splice(index, 0, member);
                added = true;
            }
        });

        if (added === false)
            this.items.push(member);
    }

    dequeue(): T {
        return this.items.shift().element;
    }

}
