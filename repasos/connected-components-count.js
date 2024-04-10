// this is a graph algorithm
// counting componts algorithm

const connectedComponentsCount = ( graph ) => {
    // console.log(graph)
    const visited = new Set();
    let count = 0;
    
    for(let node in graph ){
      // console.log(node) // '0'
      // console.log(visited);
      if(explore(graph, node, visited) === true){
        count +=1
      }
    }
    
    return count
  }
  
  const explore = (graph, current, visited) => {
    // console.log(current)
    if( visited.has(String(current))) return false;
    
    visited.add(String(current))
    
    for ( let neighbor of graph[current]){
      // console.log(neighbor) // 8
      explore(graph, neighbor, visited)
    }
    
    return true
  }
  
  
  connectedComponentsCount({
      0:[8,1,5],
      1:[0],
      5:[0,8],
      8:[0,5],
      2:[3,4],
      3:[2,4],
      4:[3,2]
  }) // -> 2
  