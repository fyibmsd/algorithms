import Dictionary from '../map/dictionary';
import Graph from './graph';
import { initializeState, State } from './graph-search';

const depthFirstSearchVisit = (vertex: any, adjacnent: Dictionary<any, any[]>, states: Dictionary<string, State>, callback: Function) => {
    states.set(vertex, State.VISITED);

    callback && callback(vertex);

    const neighbors = adjacnent.get(vertex);

    neighbors.map(neighbor =>
        states.get(neighbor) === State.UNVISITED && depthFirstSearchVisit(neighbor, adjacnent, states, callback)
    );

    states.set(vertex, State.EXPLORED);
};

export const depthFirstSearch = (graph: Graph<any>, callback: Function) => {
    const vertices = graph.getVertices();
    const adjacent = graph.getAdjacent();

    const states = initializeState(vertices);

    vertices.map(vertex =>
        states.get(vertex) === State.UNVISITED && depthFirstSearchVisit(vertex, adjacent, states, callback)
    );
};
