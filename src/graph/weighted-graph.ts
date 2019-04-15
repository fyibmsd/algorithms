import Graph from './graph';
import Dictionary from '../map/dictionary';

interface Edge<T> {
    src: T
    dest: T
    weight: number
}

export default class WeightedGraph<T> extends Graph<T> {
    protected adjacent: Dictionary<T, any[]> = new Dictionary<T, Edge<T>[]>();

    addEdge(src: T, dest: T, weight: number) {
        if (weight !== 0 && src !== dest) {
            const edge: Edge<T> = { src, dest, weight };

            this.adjacent.get(src).push(edge);
            this.adjacent.get(dest).push(edge);

            this.edges++;
        }
    }

    reachable(src: T, dest: T): boolean {
        if (src === dest) return true;

        const edge: Edge<T> = this.adjacent.get(src).filter(edge => edge.dest === dest)[0];

        return edge !== undefined && edge.weight > 0;
    }

    getDistance(src: T, dest: T): number {
        if (src === dest) return 0;

        const edge: Edge<T> = this.adjacent.get(src).filter(edge => edge.dest === dest)[0];

        if (edge === undefined) return 0;

        return edge.weight;
    }

    /**
     * get adjacency list
     * */
    toArray() {
        return this.adjacent.keys().map((key: any) => {
            const row = this.adjacent.get(key)
                .filter(({ src }) => src === key)
                .map(({ dest }) => dest);

            row.unshift(key);

            return row;
        });
    }
}
