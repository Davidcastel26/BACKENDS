const hasPathBreadth = ( graph, src, dst) => {
  // we must create the queue
  const queue = [ src ]
  // loop if the queue is not empty
  while( queue.length > 0 ){
    // we need to start the first iteration by removing the front of the list
   const current = queue.shift()
   // if the currect is destination will be true
   if( current === dst ) return true;
    
  // we need to check the neighbors for the current node
   for ( let neighbor of graph[current]){
     
      queue.push( neighbor )
     // console.log(queue)
   }
  }
// if never returns true should return false
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
 
 
 hasPathBreadth( graph1, 'f', 'k')