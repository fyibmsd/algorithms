import Queue from '../list/queue';
import Graph from './graph';
import { initializeState, State } from './graph-search';

export const breadthFirstSearch = (graph: Graph<any>, startVertex: any, callback: Function) => {
    const vertices = graph.getVertices();
    const adjacent = graph.getAdjacent();

    const states = initializeState(vertices);

    const queue = new Queue<any>();

    queue.enqueue(startVertex);

    while (queue.isEmpty() === false) {
        const u = queue.dequeue();
        const neighbors = adjacent.get(u);

        states.set(u, State.VISITED);

        neighbors.map(n => {
            if (states.get(n) === State.UNVISITED) {
                states.set(n, State.VISITED);
                queue.enqueue(n);
            }
        });

        states.set(u, State.EXPLORED);

        callback && callback(u);
    }
};
