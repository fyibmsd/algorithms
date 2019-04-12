import Graph from './graph';
import { expect } from 'chai';

describe('test graph', () => {

    let graph: Graph<string>;
    let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    let edges = {
        'A': ['B', 'C', 'D'],
        'B': ['E', 'F'],
        'C': ['D', 'G'],
        'D': ['G', 'H'],
        'E': ['I']
    };

    beforeEach(() => {
        graph = new Graph<string>();

        /**
         *                  A
         *                / \  \
         *              B   C - D
         *             / \   \ /  \
         *            E   F   G    H
         *           /
         *          I
         * */
        vertices.map(vertex => graph.addVertex(vertex));

        Object.keys(edges).map(src =>
            edges[src].map(dest =>
                graph.addEdge(src, dest)
            )
        );
    });

    it('should be undirected graph', () => {
        expect(graph.vertexCount()).equal(vertices.length);

        expect(graph.edgeCount()).equal(10);

        // adjacency list
        expect(graph.toArray()).deep.equals([
            ['A', 'B', 'C', 'D'],
            ['B', 'A', 'E', 'F'],
            ['C', 'A', 'D', 'G'],
            ['D', 'A', 'C', 'G', 'H'],
            ['E', 'B', 'I'],
            ['F', 'B'],
            ['G', 'C', 'D'],
            ['H', 'D'],
            ['I', 'E']
        ]);
    });

    it('should breadth first search', () => {
        let expected = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
        let counter = 0;

        graph.bfs(vertices[0], visited => expect(visited).equal(expected[counter++]));
    });

});
