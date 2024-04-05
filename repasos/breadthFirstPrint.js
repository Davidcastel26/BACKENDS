
const breadthFirstPrint = (
  graph,
  source, // current location
) => {
   // breadth needs to be into a queue
  const queue = [ source ]
  
  while( queue.length > 0 ){
    // we need to return the first element
    // we need to save into a variable the value
    const current = queue.shift()
    // take a look
    console.log( current )
    
    // graph[current] will keep the info from the array like a:['b','c']
    for( let neighbor of graph[current]){
      // we need to added into the back for the queue
      queue.push(neighbor)
    }
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

breadthFirstPrint( graph, 'a')
