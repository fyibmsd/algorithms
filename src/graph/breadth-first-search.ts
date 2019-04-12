import Queue from '../list/queue';
import Graph from './graph';
import { initializeState, State } from './graph-search';

export const breadthFirstSearch = (graph: Graph<any>, startVertex: any, callback?: Function) => {
    const vertices = graph.getVertices();
    const adjacent = graph.getAdjacent();

    const states = initializeState(vertices);

    const distances: any = {};
    const predecessors: any = {};

    vertices.map(vertex => {
        distances[vertex] = 0;
        predecessors[vertex] = null;
    });


    const queue = new Queue<any>();

    queue.enqueue(startVertex);

    while (queue.isEmpty() === false) {
        const vertex = queue.dequeue();
        const neighbors = adjacent.get(vertex);

        states.set(vertex, State.VISITED);

        neighbors.map(neighbor => {
            if (states.get(neighbor) === State.UNVISITED) {
                states.set(neighbor, State.VISITED);

                distances[neighbor] = distances[vertex] + 1;
                predecessors[neighbor] = vertex;

                queue.enqueue(neighbor);
            }
        });

        states.set(vertex, State.EXPLORED);

        callback && callback(vertex);
    }

    return { distances, predecessors };
};
