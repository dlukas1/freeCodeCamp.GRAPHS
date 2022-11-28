const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}


// depth first recursive
const hasPath = (graph, src, dst) => {

    if(src === dst) return true;

    for(var neighbor of graph[src]){
        if(hasPath(graph, neighbor, dst)){
            return true;
        }
    }

    return false; 
}

console.log(hasPath(graph, 'c', 'f'));