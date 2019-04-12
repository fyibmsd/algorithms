import Dictionary from '../map/dictionary';
import { breadthFirstSearch } from './breadth-first-search';
import { depthFirstSearch } from './depth-first-search';

export default class Graph<T> {
    protected vertices: any = [];

    protected edges: number = 0;

    protected adjacent: Dictionary<T, any> = new Dictionary<T, T[]>();

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

    addEdge(src: T, dest: T, weight?: number) {
        this.adjacent.get(src).push(dest);
        this.adjacent.get(dest).push(src);

        this.edges++;
    }

    bfs(startVertex: T, callback?: Function) {
        return breadthFirstSearch(this, startVertex, callback);
    }

    dfs(callback?: Function) {
        return depthFirstSearch(this, callback);
    }

    getVertices() {
        return this.vertices;
    }

    getAdjacent(): Dictionary<T, T[]> {
        return this.adjacent;
    }

    /**
     * get adjacency list
     * */
    toArray() {
        return this.adjacent.keys().map((key: any) => {
            const row = this.adjacent.get(key).concat();
            row.unshift(key);

            return row;
        });
    }
}
