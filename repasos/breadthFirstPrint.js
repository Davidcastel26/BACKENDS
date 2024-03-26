
const breadthFirstPrint = (graph, source) => {
  
    const queue = [ source ]
    
    while ( queue.length > 0){
      let current = queue.shift()
      console.log(current)
      
      for( let neighbor of graph[current]){
        queue.push(neighbor)
      }
    }
    
  }
  
  const graphy = {
      a:['c','b'],
      b:['d'],
      c:['e'],
      d:['f'],
      e:[],
      f:[],
  }
  
  breadthFirstPrint( graphy, 'a')