
const graph = {
    0: [8,1,5],
    1: [0],
    5: [0,8],
    8: [0,5],
    2: [3,4],
    3: [2,4],
    4: [3,2]
}


const connectedCompenentsCount = (graph) => {

    const visitedSet = new Set();
    var count = 0;


    for(var node in graph){
        if(explore(graph, node, visitedSet)){
            count += 1;
        }
    }

    return count;
}

const explore = (graph, current, visitedSet) => {

    if(visitedSet.has(String(current))) return false;

    visitedSet.add(String(current));

    for(var neighbor of graph[current]){
        explore(graph, neighbor, visitedSet);
    }

    return true;
};

console.log(connectedCompenentsCount(graph))