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

    /**
     * get adjacency list
     * */
    toArray() {
        return this.adjacent.keys().map((key: any) => {
            const row = this.adjacent.get(key)
                .filter(({ dest }) => dest === key)
                .map(({ src }) => src);

            row.unshift(key);

            return row;
        });
    }
}
