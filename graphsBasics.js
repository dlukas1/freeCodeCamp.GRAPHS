const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// depth first iterative
const deplthFirstPrint = (graph, source) => {
    var stack = [source];

    while(stack.length > 0){
        var current = stack.pop();
        console.log(current);

        for(var neighbor of graph[current]){
            stack.push(neighbor);
        }
    }
}

// depth first recursive
const deplthFirstRecursivePrint = (graph, source) => {
    console.log(source);
    for(var neighbor of graph[source]){
        deplthFirstRecursivePrint(graph, neighbor);
    }
}

// breadth first iterative
const breadthFirstPrint = (graph, source) => {
    const queue = [source];
    while (queue.length > 0) {
        var current = queue.shift();
        console.log(current);
        for (var neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
}


//deplthFirstPrint(graph, 'a');
// deplthFirstRecursivePrint(graph, 'a');
breadthFirstPrint(graph, 'a');

