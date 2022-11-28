const graph = {
    'w': ['x', 'v'],
    'x': ['w', 'y'],
    'v': ['w', 'z'],
    'y': ['x', 'z'],
    'z': ['y', 'v']
}


const shortestPath = (graph, src, dst) => {

    const visited = new Set([src]);
    const queue = [[src, 0]];

    while (queue.length > 0) {

        var [node, distance] = queue.shift();

        if(node === dst) return distance;

        for (var neighbor of graph[node]) {
            if(!visited.has(neighbor)){
                visited.add(neighbor);
                queue.push([neighbor, distance+1]);
            }
        }
    }

    return -1;
};

console.log(shortestPath(graph, 'w', 'z'));