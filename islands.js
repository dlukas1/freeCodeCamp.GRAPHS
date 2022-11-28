const arr = [
    [0,1,0,0,1,0],
    [1,1,0,0,1,0],
    [0,1,0,0,0,0],
    [0,0,0,1,1,0],
    [0,1,0,1,1,0],
    [0,0,0,0,0,0],
]

const countIslands = (arr) => {

    var visited = new Set();
    var count = 0;

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[0].length; j++){

            var current = arr[i][j];
            var logPos = i + '-' + j;

            if(!visited.has(logPos)){

                visited.push(logPos);

                if(current === 1){
                    explore(arr, i, j, visited);
                    count += 1;
                }
            }
        }
    }
    return count;
};

const explore = (arr, i, j, visited) => {
    const queue = arr[i][j];
    while(queue.length > 0){
        var current = queue.shift();

        if(i > 0) queue.push(arr[i-1][j]);
        if(i < arr.length-1) queue.push(arr[i+1][j]);
        if(j > 0) queue.push(arr[i][j-1]);
        if(j < arr[0].length-1) queue.push(arr[i][j+1]);
    }
};

console.log(countIslands(arr));

// const queue = [source];
// while (queue.length > 0) {
//     var current = queue.shift();
//     console.log(current);
//     for (var neighbor of graph[current]) {
//         queue.push(neighbor)
//     }
// }