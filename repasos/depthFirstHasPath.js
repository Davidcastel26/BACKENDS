// this is the complex
// n = # nodes
// e = # edges
// time: 0(e)
// space: 0(n)

//n as a single variable
// n = # nodes
// n^2 = # edges
// time = 0(n^2)
// space = 0(n)

const hasPath = ( 
  graph, 
  src, // location
  dst,  // destination
) => {
   //its the src what im looking for return true 
    if( src == dst ) return true
    // console.log(src)
  // its not the same ->
  // now lets loop for every single array form the obj of the graph
  
    for( let neighbor of graph[src]){
      // console.log(neighbor)
      //create the recurstion but now the src will be the neighbor we found
      // hasPath( graph, neighbor, dst)
      // we dont set return false since we need to continues till the end of the edges
      // console.log( neighbor)
      // console.log( graph[neighbor] )
    if( hasPath( graph, neighbor, dst) === true ){
      // console.log( neighbor)
      // console.log( graph[neighbor] )
       return true 
      }
    }
  
  // until we loop everthing return false
    return false
  }
  

  const graph = {
    f:['g','i'],
    g:['h'],
    h:[],
    i:['g','k'],
    j:['i'],
    k:[]
  }
  
  
  hasPath( graph, 'f', 'k')