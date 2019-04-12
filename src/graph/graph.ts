import Dictionary from '../map/dictionary';
import { breadthFirstSearch } from './breadth-first-search';

export default class Graph<T> {
    private vertices: any = [];

    private edges: number = 0;

    private adjacent: Dictionary<T, T[]> = new Dictionary<T, T[]>();

    vertexCount() {
        return this.vertices.length;
    }

    edgeCount() {
        return this.edges;
    }

    addVertex(vertex: T) {
        this.vertices.push(vertex);
        this.adjacent.set(vertex, []);
    }

    addEdge(src: T, dest: T) {
        this.adjacent.get(src).push(dest);
        this.adjacent.get(dest).push(src);

        this.edges++;
    }

    bfs(startVertex: T, callback?: Function) {
        return breadthFirstSearch(this, startVertex, callback);
    }

    getVertices() {
        return this.vertices;
    }

    getAdjacent(): Dictionary<T, T[]> {
        return this.adjacent;
    }

    toArray() {
        return this.adjacent.keys().map((key: any) => {
            const row = this.adjacent.get(key).concat();
            row.unshift(key);

            return row;
        });
    }
}
