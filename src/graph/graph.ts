import Dictionary from '../map/dictionary';

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

    toArray() {
        return this.adjacent.keys().map((key: any) => {
            const row = this.adjacent.get(key).concat();
            row.unshift(key);

            return row;
        });
    }
}
