import Dictionary from '../map/dictionary';

export enum State {
    UNVISITED,
    VISITED,
    EXPLORED
}

export const initializeState = (vertices: any[]) => {
    const states: Dictionary<string, State> = new Dictionary<string, State>();

    vertices.map(v => states.set(v, State.UNVISITED));

    return states;
};
