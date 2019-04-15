import WeightedGraph from './weighted-graph';

const minDistance = (dist, visted) => {
    let min = Infinity;
    let minVertex = null;

    Object.keys(dist).map(vertex => {
        if (visted[vertex] === false && dist[vertex] <= min) {
            min = dist[vertex];
            minVertex = vertex;
        }
    });

    return minVertex;
};

export const dijkstra = (graph: WeightedGraph<any>, src: any) => {
    const dist: any = {};
    const visited: any = {};
    const length = graph.vertexCount();

    graph.getVertices().map(vertex => {
        dist[vertex] = Infinity;
        visited[vertex] = false;
    });

    dist[src] = 0;

    for (let i = 0; i < length - 1; i++) {
        const vertex = minDistance(dist, visited);

        visited[vertex] = true;

        Object.keys(dist).map(target => {
            const distance = graph.getDistance(vertex, target);

            if (visited[target] === false && distance !== 0 && dist[vertex] !== Infinity && dist[vertex] + distance <= dist[target])
                dist[target] = dist[vertex] + distance;
        });
    }

    return dist;
};
