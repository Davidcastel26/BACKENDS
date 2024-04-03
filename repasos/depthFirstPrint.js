const depthfirstPrint = (
    graph,
    source
  ) => {
    // here we set the stack as an array
    // the array will contain the source in this case is 'a'
    const stack = [source]
    
    //while stack still contain nodes
    while( stack.length > 0 ){
      // we stracted the first source node value
      // remove the top of the stack
      // save into variable to get access to the value
      const current = stack.pop()
      // take a look
      console.log(current)
      // consider the neigbors
      // this is how we enter into the array associated with the a
      // this graph[current] mean check the value we are getting and start to loop from there
      // the for of loop in order through the array
      for( let neighbor of graph[current]){
        // now we need to push then on top of the stack
        stack.push(neighbor)
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
  
  depthfirstPrint( graph, 'a')
  
  