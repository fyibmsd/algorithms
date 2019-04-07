const swap = (o, x, y) => [o[x], o[y]] = [o[y], o[x]];

const range = (start, end, step = 1) => {
    let array = [];

    for (let i = start; i <= end; i++)
        array.push(i * step);

    return array;
};

export { swap, range };
