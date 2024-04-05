const depthFirstPrintRecursive = (
    graph,
    source, // current location
  ) => {
    //we do want to begain 'a' since thats the source node that has been provided
    console.log( source )
    
    // we need to look at the 'a' neighbor
    // console.log(graph[source])
    // in case of e:[] we wont have a loop since the node is empty
    for( let neighbor of graph[source]){
      //create the recursion
      depthFirstPrintRecursive(graph, neighbor)
    }
  }
  
  const graph = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
  }
  
  depthFirstPrintRecursive( graph, 'a')
  
  