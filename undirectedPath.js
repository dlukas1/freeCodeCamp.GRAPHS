const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
];

const undirectedPath = (edges, nodeA, nodeB) => {

    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
    
};

const buildGraph = (edges) => {
    const graph = {};

    for(var edge of edges){

        const[a,b] = edge;

        if(!(a in graph))graph[a] = [];
        if(!(b in graph))graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

const hasPath = (graph, src, dst, visitedSet) => {

    if(visitedSet.has(src)) return false;
    visitedSet.add(src);

    if (src === dst) return true;

    for(var neighbor of graph[src]){
        if(hasPath(graph, neighbor, dst, visitedSet)){
            return true;
        }
    }
    return false;
}

console.log(undirectedPath(edges, 'j', 'o'));