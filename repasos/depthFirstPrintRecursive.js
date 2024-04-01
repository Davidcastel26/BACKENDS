
depthFirstPrintRecursive = ( graph, source ) => {

    console.log(source)
    for( let neighbor of graph[source]){
        depthFirstPrintRecursive( graph, neighbor)
    }

}
 
const graphy = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[''],
    f:[''],
}

depthFirstPrintRecursive( graphy, 'a')