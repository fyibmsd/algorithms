import Graph from './graph';
import { expect } from 'chai';

describe('test graph', () => {

    it('should be undirected graph', () => {
        const graph = new Graph<string>();

        /**
         *                  A
         *                / \  \
         *              B   C - D
         *             / \   \ /  \
         *            E   F   G    H
         *           /
         *          I
         * */
        const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
        const edges = {
            'A': ['B', 'C', 'D'],
            'B': ['E', 'F'],
            'C': ['D', 'G'],
            'D': ['G', 'H'],
            'E': ['I']
        };

        vertices.map(vertex => graph.addVertex(vertex));

        Object.keys(edges).map(src =>
            edges[src].map(dest =>
                graph.addEdge(src, dest)
            )
        );

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

});
