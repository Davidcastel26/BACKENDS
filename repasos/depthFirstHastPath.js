const hasPath = ( graph, src, dst) => {
  
    if( src === dst ) true
    
    for( let neigbor of graph[src]){
      if( hasPath( graph, neigbor, dst) === true) {
        return true
      }
    }
    return false
  }
  
  
  const graph1 = {
    f:['g','i'],
    g:['h'],
    h:[],
    i:['g','k'],
    j:['i'],
    k:[]
  }
  
  
  hasPath( graph1, 'f', 'k')